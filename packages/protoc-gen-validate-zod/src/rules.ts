import { ScalarType } from "@bufbuild/protobuf";
import { FieldRules, MessageRules } from "./generated/validate_pb.js";

const scalarToRule = {
  [ScalarType.STRING]: "string",
  [ScalarType.BOOL]: "bool",
  [ScalarType.BYTES]: "bytes",
  [ScalarType.UINT64]: "uint64",
  [ScalarType.INT64]: "int64",
  [ScalarType.UINT32]: "uint32",
  [ScalarType.INT32]: "int32",
  [ScalarType.FLOAT]: "float",
  [ScalarType.DOUBLE]: "double",
  [ScalarType.SINT32]: "sint32",
  [ScalarType.SFIXED32]: "sfixed32",
  [ScalarType.FIXED32]: "fixed32",
  [ScalarType.SINT64]: "sint64",
  [ScalarType.SFIXED64]: "sfixed64",
  [ScalarType.FIXED64]: "fixed64",
} as const;

export function hasRulesForScalar<TScalarType extends ScalarType>(
  scalar: TScalarType,
  rules?: FieldRules
): rules is FieldRules & { type: FieldRules["type"] & { case: typeof scalarToRule[TScalarType] } } {
  return hasRulesFor(scalarToRule[scalar], rules);
}

// eslint-disable-next-line no-unused-vars
export function hasRulesFor(type: "message", rules?: FieldRules): rules is FieldRules & { message: MessageRules };
export function hasRulesFor<TFieldRulesType extends NonNullable<FieldRules["type"]["case"]>>(
  // eslint-disable-next-line no-unused-vars
  type: TFieldRulesType,
  rules?: FieldRules
): rules is FieldRules & { type: FieldRules["type"] & { case: TFieldRulesType } };
export function hasRulesFor(type: string, rules?: FieldRules): boolean {
  if (rules === undefined) {
    return false;
  }

  if (type === "message") {
    return rules.message !== undefined;
  }

  if (rules.type.case !== undefined && rules.type.case !== type) {
    throw new Error(`Expected ${type} validation rules but got ${rules.type.case} validation rules`);
  }

  return true;
}
