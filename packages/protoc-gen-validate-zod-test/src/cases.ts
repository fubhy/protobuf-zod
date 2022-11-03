import { Any, IMessageTypeRegistry, JsonValue } from "@bufbuild/protobuf";
import { TestCase } from "./generated/harness_pb.js";
import fs from "node:fs";

export interface TestCaseJson {
  test: TestCase;
  type: string;
  value: string;
  registry: Set<string>;
}

export function readTestCases(files: string[], types: IMessageTypeRegistry): TestCaseJson[] {
  const cases: TestCaseJson[] = [];

  for (const input of files) {
    const lines = fs.readFileSync(input, "utf8").split("\n");

    for (const line of lines) {
      if (!line) {
        continue;
      }

      const test = TestCase.fromJson(JSON.parse(line), { typeRegistry: types });
      if (test.message?.value === undefined) {
        throw new Error("Missing message value");
      }

      const message = unpackAny(test.message, types);
      const json = message.toJson({ typeRegistry: types });
      const type = message.getType().typeName;
      const registry = new Set(collectAnyTypes(json));

      cases.push({
        type,
        test,
        registry,
        value: JSON.stringify(json),
      });
    }
  }

  return cases;
}

// NOTE: Limits the list of types to only those present in the message payload.
function collectAnyTypes(json: JsonValue): string[] {
  const types: string[] = [];

  if (json !== null && Array.isArray(json)) {
    for (const item of json) {
      types.push(...collectAnyTypes(item));
    }
  } else if (json !== null && typeof json === "object") {
    for (const [key, value] of Object.entries(json)) {
      if (key === "@type" && typeof value === "string") {
        types.push(value.replace("type.googleapis.com/", ""));
      } else if (typeof value === "object" && value !== null) {
        types.push(...collectAnyTypes(value));
      }
    }
  }

  return types;
}

// TODO: This would be useful in @bufbuild/protobuf.
function unpackAny(any: Any, registry: IMessageTypeRegistry) {
  const type = any.typeUrl.replace("type.googleapis.com/", "");
  const message = registry.findMessage(type);
  const instance = new message!();
  any.unpackTo(instance);
  return instance;
}
