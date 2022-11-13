import { DescEnum, DescField, DescFile, DescMessage, DescOneof, ScalarType } from "@bufbuild/protobuf";
import { Schema } from "@bufbuild/protoplugin";
import { findCustomMessageOption, findCustomScalarOption } from "@bufbuild/protoplugin/ecmascript";
import { FieldRules, MessageRules, RepeatedRules } from "./generated/validate_pb.js";
import { hasRulesFor, hasRulesForScalar } from "./rules.js";
import { createFile } from "./utils.js";

export function generateTs(schema: Schema) {
  for (const file of schema.files) {
    const f = createFile(schema, file);
    f.preamble(file);
  }
}

function isMessageDisabled(message: DescMessage): boolean {
  return findCustomScalarOption(message, 1071, ScalarType.BOOL) ?? false;
}

function isMessageIgnored(message: DescMessage): boolean {
  return findCustomScalarOption(message, 1072, ScalarType.BOOL) ?? false;
}

function isOneOfRequired(oneof: DescOneof): boolean {
  return findCustomScalarOption(oneof, 1071, ScalarType.BOOL) ?? false;
}

type FieldItemRules = NonNullable<MessageRules | FieldRules["type"]["value"]>;

function getFieldRules(field: DescField) {
  let repeated: RepeatedRules | undefined = undefined;
  let items: FieldItemRules | undefined = undefined;

  const rules = findCustomMessageOption(field, 1071, FieldRules);
  if (field.repeated && hasRulesFor("repeated", rules)) {
    repeated = rules.type.value;
    items = getApplicableFieldRules(field, rules.type.value.items);
  } else if (!field.repeated) {
    items = getApplicableFieldRules(field, rules);
  }

  return { repeated, items };
}

function getApplicableFieldRules(field: DescField, rules?: FieldRules) {
  switch (field.fieldKind) {
    case "message":
      return hasRulesFor("message", rules) ? rules.message : undefined;

    case "enum":
      return hasRulesFor("enum", rules) ? rules.type.value : undefined;

    case "map":
      return hasRulesFor("map", rules) ? rules.type.value : undefined;

    case "scalar": {
      return hasRulesForScalar(field.scalar, rules) ? rules.type.value : undefined;
    }
  }
}

function collectMessagesAndEnums(
  initialMessages: DescMessage[],
  initialEnums: DescEnum[]
): [DescMessage[], DescEnum[]] {
  const messages: DescMessage[] = initialMessages;
  const enums: DescEnum[] = initialEnums;

  for (const message of messages) {
    const [nestedMessages, nestedEnums] = collectMessagesAndEnums(message.nestedMessages, message.nestedEnums);

    messages.push(...nestedMessages);
    enums.push(...nestedEnums);
  }

  return [messages, enums];
}
