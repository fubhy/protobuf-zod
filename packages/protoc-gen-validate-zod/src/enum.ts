import { DescEnum } from "@bufbuild/protobuf";
import { makeJsDoc, Printable } from "@bufbuild/protoplugin/ecmascript";
import { hasRulesFor } from "./rules.js";
import { GeneratedFile } from "./utils.js";
import { FieldRules } from "./validate.js";

export function generateEnumSchema(f: GeneratedFile, enumeration: DescEnum) {
  f.print(makeJsDoc(enumeration));
  f.print("export const ", f.reference(enumeration), " = ", f.zod, ".nativeEnum(", f.import(enumeration), ");\n");
}

export function getEnumSchema(f: GeneratedFile, enumeration: DescEnum, rules?: FieldRules): Printable {
  const typing: Printable[] = [f.lazy(f.reference(enumeration))];

  if (hasRulesFor("enum", rules)) {
    if (rules.type.value.definedOnly !== undefined) {
      // TODO: Implement
    }

    if (rules.type.value.in.length) {
      typing.push(f.validate.isIn(rules.type.value.in));
    }

    if (rules.type.value.notIn.length) {
      typing.push(f.validate.isNotIn(rules.type.value.notIn));
    }

    if (rules.type.value.const !== undefined) {
      typing.push(f.validate.isConst(rules.type.value.const));
    }
  }

  return typing;
}
