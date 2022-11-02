import { DescMessage } from "@bufbuild/protobuf";
import { localName, literalString } from "@bufbuild/protoplugin/ecmascript";
import { Schema } from "@bufbuild/protoplugin";
import { readTestCases } from "./cases.js";

function splitParameter(parameter: string | undefined): { key: string; value: string }[] {
  if (parameter == undefined) {
    return [];
  }

  return parameter.split(",").map((pair) => {
    const i = pair.indexOf("=");
    return {
      key: i === -1 ? pair : pair.substring(0, i),
      value: i === -1 ? "" : pair.substring(i + 1),
    };
  });
}

function getParameterValues(parameter: string | undefined, key: string): undefined | string[] {
  const matches = splitParameter(parameter).filter((pair) => pair.key === key);
  if (!matches.length) {
    return undefined;
  }

  return matches.map((match) => match.value);
}

export function generateTs(schema: Schema) {
  const input = getParameterValues(schema.proto.parameter, "cases");
  if (!input) {
    throw new Error("Missing cases option");
  }

  const cases = readTestCases(input);

  for (const file of schema.files) {
    const f = schema.generateFile(`${file.name}.test.ts`);
    f.preamble(file);

    const messages = getMessages(file.messages);
    const tests = cases
      .filter((test) => messages.has(test.type))
      .map((test) => ({
        ...test,
        message: messages.get(test.type)!,
      }));

    for (const current of tests) {
      if (tests.indexOf(current) !== 0) {
        f.print();
      }

      const it = f.import("it", "vitest");
      const expect = f.import("expect", "vitest");
      const schema = f.import(`${localName(current.message)}Schema`, `./${file.name}_zod.js`);

      f.print(it, "(", literalString(current.test.name), ", () => {");
      f.print("  ", "const message = ", current.message, ".fromJson(", current.value, ");");

      if (current.test.failures === 0) {
        f.print("  ", expect, "(message).toBeValid(", schema, ");");
      } else {
        f.print("  ", expect, "(message).toBeInvalid(", schema, ", ", current.test.failures, ");");
      }

      f.print("});");
    }
  }
}

function getMessages(messages: DescMessage[]): Map<string, DescMessage> {
  let output = new Map(messages.map((message) => [message.typeName, message]));

  for (const message of messages) {
    if (message.nestedMessages.length) {
      output = new Map([...output.entries(), ...getMessages(message.nestedMessages)]);
    }
  }

  return output;
}
