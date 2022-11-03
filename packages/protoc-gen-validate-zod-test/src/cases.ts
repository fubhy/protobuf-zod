import {
  BinaryReadOptions,
  JsonReadOptions,
  JsonValue,
  MessageType,
  PartialMessage,
  PlainMessage,
  proto3,
  Value,
} from "@bufbuild/protobuf";
import { TestCase } from "./generated/tests/harness/v1/harness_pb.js";
import fs from "node:fs";

export interface TestCaseJson {
  test: TestCase;
  type: string;
  value: string;
}

function readTestCase(test: TestCase): TestCaseJson {
  if (test.message?.value === undefined) {
    throw new Error("Missing message");
  }

  const type = test.message.typeUrl.replace("type.googleapis.com/", "");
  const value = Value.fromBinary(test.message.value).toJsonString();

  return {
    type,
    test,
    value,
  };
}

export function readTestCases(files: string[]): TestCaseJson[] {
  const cases: TestCaseJson[] = [];

  for (const input of files) {
    const lines = fs.readFileSync(input, "utf8").split("\n");

    for (const line of lines) {
      if (!line) {
        continue;
      }

      // Unmarshal the test case using a fake registry that simply produces a generic Value message for all messages.
      const test = TestCase.fromJson(JSON.parse(line), {
        typeRegistry: {
          findMessage,
        },
      });

      // In absence of the full registry, simply parse the json using the generic type.googleapis.com/google.protobuf.Value.
      cases.push(readTestCase(test));
    }
  }

  return cases;
}

const registry = new Map<string, MessageType>();

function findMessage(name: string) {
  let type = registry.get(name);

  if (type === undefined) {
    type = class ValueFacade extends Value {
      static override readonly typeName = name as any;

      constructor(data?: PartialMessage<ValueFacade>) {
        super();
        proto3.util.initPartial(data, this);
      }

      static override fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValueFacade {
        return new ValueFacade().fromBinary(bytes, options);
      }

      static override fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValueFacade {
        return new ValueFacade().fromJson(jsonValue, options);
      }

      static override fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValueFacade {
        return new ValueFacade().fromJsonString(jsonString, options);
      }

      static override equals(
        a: ValueFacade | PlainMessage<ValueFacade> | undefined,
        b: ValueFacade | PlainMessage<ValueFacade> | undefined
      ): boolean {
        return proto3.util.equals(ValueFacade, a, b);
      }
    };

    registry.set(name, type);
  }

  return type;
}
