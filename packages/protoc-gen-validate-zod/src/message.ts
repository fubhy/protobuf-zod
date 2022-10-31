import { DescMessage, ScalarType, codegenInfo } from "@bufbuild/protobuf";
import { findCustomScalarOption, makeJsDoc, Printable } from "@bufbuild/protoplugin/ecmascript";
import { generateEnumSchema } from "./enum.js";
import { generateFieldSchema, generateOneOfSchema } from "./field.js";
import { hasRulesFor } from "./rules.js";
import { GeneratedFile } from "./utils.js";
import { FieldRules } from "./validate.js";
import { getWktSchema } from "./wkt.js";

export function generateMessageSchema(f: GeneratedFile, message: DescMessage) {
  const disabled = findCustomScalarOption(message, 1071, ScalarType.BOOL) ?? false;
  const ignored = findCustomScalarOption(message, 1072, ScalarType.BOOL) ?? false;

  for (const nestedEnum of message.nestedEnums) {
    generateEnumSchema(f, nestedEnum);
  }

  for (const nestedMessage of message.nestedMessages) {
    generateMessageSchema(f, nestedMessage);
  }

  f.print(makeJsDoc(message));
  f.print("export const ", f.reference(message), " = ", f.zod, ".object({");

  for (const member of message.members) {
    switch (member.kind) {
      case "oneof":
        generateOneOfSchema(f, member, ignored || disabled);
        break;
      case "field":
        generateFieldSchema(f, member, ignored || disabled);
        break;
    }
  }

  f.print("});\n");
}

export function getMessageSchema(f: GeneratedFile, message: DescMessage, rules?: FieldRules): Printable {
  const validated = hasRulesFor("message", rules);
  if (validated && rules.message.skip) {
    // TODO: Can we not use "any" here?
    return [f.zod, ".any().nullish()"];
  }

  const typing: Printable[] = [];
  const wkt = codegenInfo.reifyWkt(message);
  if (wkt !== undefined) {
    typing.push(getWktSchema(f, wkt, rules));
  } else {
    typing.push(f.lazy(f.reference(message)));
  }

  if (!validated || !rules.message.required) {
    typing.push(".nullish()");
  }

  return typing;
}
