import { DescField } from "@bufbuild/protobuf";
import { Printable } from "@bufbuild/protoplugin/ecmascript";
import { getEnumSchema } from "./enum.js";
import { getMessageSchema } from "./message.js";
import { hasRulesFor } from "./rules.js";
import { getScalarSchema } from "./scalar.js";
import { GeneratedFile } from "./utils.js";
import { FieldRules } from "./validate.js";

type DescFieldMap = DescField & {
  fieldKind: "map";
};

type DescFieldMapKey = DescFieldMap["mapKey"];
type DescFieldMapValue = DescFieldMap["mapValue"];

export function getMapSchema(
  f: GeneratedFile,
  key: DescFieldMapKey,
  value: DescFieldMapValue,
  rules?: FieldRules
): Printable[] {
  const validated = hasRulesFor("map", rules);

  const keyRules = validated ? rules.type.value.keys : undefined;
  const valueRules = validated ? rules.type.value.values : undefined;

  const keySchema = getScalarSchema(f, key, keyRules);
  const valueSchema = getMapValueSchema(f, value, valueRules);

  const typing: Printable[] = [f.runtime("map"), "(", keySchema, ", ", valueSchema, ")"];

  return typing;
}

function getMapValueSchema(f: GeneratedFile, value: DescFieldMapValue, rules?: FieldRules): Printable {
  switch (value.kind) {
    case "enum":
      return getEnumSchema(f, value.enum, rules);

    case "scalar":
      return getScalarSchema(f, value.scalar, rules);

    case "message":
      return getMessageSchema(f, value.message, rules);
  }
}
