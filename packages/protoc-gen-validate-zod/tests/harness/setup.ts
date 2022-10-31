import { JsonValue } from "@bufbuild/protobuf";
import { expect } from "vitest";
import type { ZodTypeAny } from "zod";

import { unmarshal } from "./registry.js";
import * as s from "./schemas.js";

function messageAndSchema(typeName: string, data: JsonValue) {
  const message = unmarshal(typeName, data);
  const name = typeName.slice(typeName.lastIndexOf(".") + 1);
  const schema: ZodTypeAny | undefined = s[`${name}Schema` as keyof typeof s];

  if (schema === undefined) {
    throw new Error(`Missing schema for ${name}`);
  }

  return [message, schema] as const;
}

expect.extend({
  toBeValid(data: JsonValue, typeName: string) {
    const [message, schema] = messageAndSchema(typeName, data);
    const result = schema.safeParse(message);

    return {
      pass: result.success,
      message: () => {
        const received = this.utils.stringify(message);
        let output = this.utils.matcherHint("toBeValid", received, typeName, this);

        if (!result.success) {
          const issues = this.utils.stringify(
            result.error.issues.map((issue) => `[${issue.path.join(".")}]: ${issue.message}`)
          );

          output += `\n\nIssues: ${issues}`;
        }

        return output;
      },
    };
  },
  toBeInvalid(data: JsonValue, typeName: string, failureCount: number) {
    const [message, schema] = messageAndSchema(typeName, data);
    const result = schema.safeParse(message);

    return {
      pass: !result.success && result.error.issues.length === failureCount,
      message: () => {
        const received = this.utils.stringify(message);
        let output = this.utils.matcherHint(`toBeInvalid`, received, typeName, this);
        output += `\n\nExpected: ${failureCount} issues`;

        if (!result.success) {
          const issues = this.utils.stringify(
            result.error.issues.map((issue) => `[${issue.path.join(".")}]: ${issue.message}`)
          );

          output += `\nIssues: ${issues}`;
        } else {
          output += `\nIssues: none`;
        }

        return output;
      },
    };
  },
});

/* eslint-disable no-unused-vars */
declare global {
  namespace Vi {
    interface JestAssertion<T = any> extends jest.Matchers<void, T> {
      toBeValid(typeName: string): void;
      toBeInvalid(typeName: string, failureCount: number): void;
    }
  }
}
