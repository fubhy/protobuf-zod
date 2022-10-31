import { DescOneof, ScalarType, DescField } from "@bufbuild/protobuf";
import {
  findCustomScalarOption,
  Printable,
  findCustomMessageOption,
  localName,
  makeJsDoc,
} from "@bufbuild/protoplugin/ecmascript";
import { getEnumSchema } from "./enum.js";
import { getMapSchema } from "./map.js";
import { getMessageSchema } from "./message.js";
import { hasRulesFor } from "./rules.js";
import { getScalarSchema } from "./scalar.js";
import { GeneratedFile, makeJsDocWithRules } from "./utils.js";
import { FieldRules } from "./validate.js";

export function generateOneOfSchema(f: GeneratedFile, oneof: DescOneof, disabled: boolean) {
  try {
    const required = !disabled && (findCustomScalarOption(oneof, 1071, ScalarType.BOOL) ?? false);
    const multiple = oneof.fields.length + (required ? 0 : 1) > 1;
    const indentation = multiple ? "    " : "  ";
    const cases: Printable[] = [];

    if (!required) {
      const empty = [
        [f.zod, ".object({\n"],
        [indentation, "  case: ", f.literal(undefined), ",\n"],
        [indentation, "  value: ", f.literal(undefined), ".nullish()", ",\n"],
        [indentation, "})"],
      ];

      cases.push(empty);
    }

    for (const field of oneof.fields) {
      const option: Printable[] = [];

      const rules = findCustomMessageOption(field, 1071, FieldRules);
      const typing = getFieldSchema(f, field, disabled ? undefined : rules);
      const discriminator = f.literal(localName(field));

      option.push(f.zod, ".object({\n");
      option.push(makeJsDocWithRules(field, rules, disabled, indentation + "  "), "\n");
      option.push(indentation, "  case: ", discriminator, ",\n");
      option.push(indentation, "  value: ", typing, ",\n");
      option.push(indentation, "})");

      cases.push(option);
    }

    const output: Printable[] = multiple ? [f.oneof(cases)] : cases;

    if (!required) {
      output.push(".nullish()");
    }

    f.print(makeJsDoc(oneof, "  "));
    f.print("  ", localName(oneof), ": ", output, ",");
  } catch (e) {
    throw new Error(`Failed to generate schema for oneof ${oneof.parent.typeName}.${oneof.name}: ${e}`);
  }
}

export function generateFieldSchema(f: GeneratedFile, field: DescField, disabled: boolean) {
  try {
    const rules = findCustomMessageOption(field, 1071, FieldRules);
    const typing = getFieldSchema(f, field, disabled ? undefined : rules);

    f.print(makeJsDocWithRules(field, rules, disabled, "  "));
    f.print("  ", localName(field), ": ", typing, ",");
  } catch (e) {
    throw new Error(`Failed to generate schema for field ${field.parent.typeName}.${field.name}: ${e}`);
  }
}

function getFieldSchema(f: GeneratedFile, field: DescField, rules?: FieldRules): Printable[] {
  const typing: Printable[] = [];

  if (field.repeated && hasRulesFor("repeated", rules)) {
    typing.push(getFieldItemSchema(f, field, rules.type.value.items), ".array()");

    if (rules.type.value.maxItems !== undefined) {
      typing.push(".max(", Number(rules.type.value.maxItems), ")");
    }

    if (rules.type.value.minItems !== undefined) {
      typing.push(".min(", Number(rules.type.value.minItems), ")");
    }

    if (rules.type.value.unique) {
      // TODO: How do we handle uniqueness of complex types? Messages, etc.?
      typing.push(f.validate.isUniqueList());
    }

    if (rules.type.value.ignoreEmpty) {
      // TODO: Implement
    }
  } else if (field.repeated) {
    typing.push(getFieldItemSchema(f, field), ".array()");
  } else {
    typing.push(getFieldItemSchema(f, field, rules));
  }

  if (field.optional) {
    typing.push(".nullish()");
  }

  return typing;
}

function getFieldItemSchema(f: GeneratedFile, field: DescField, rules?: FieldRules): Printable {
  switch (field.fieldKind) {
    case "scalar":
      return getScalarSchema(f, field.scalar, rules);

    case "enum":
      return getEnumSchema(f, field.enum, rules);

    case "message":
      return getMessageSchema(f, field.message, rules);

    case "map":
      return getMapSchema(f, field.mapKey, field.mapValue, rules);
  }
}
