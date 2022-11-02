import { Message } from "@bufbuild/protobuf";
import { expect } from "vitest";
import type { z } from "zod";

expect.extend({
  toBeValid(message: Message, schema: z.ZodTypeAny) {
    const result = schema.safeParse(message);

    return {
      pass: result.success,
      message: () => {
        const received = this.utils.stringify(message);
        const type = message.getType().typeName;

        let output = this.utils.matcherHint("toBeValid", received, type, this);

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
  toBeInvalid(message: Message, schema: z.ZodTypeAny, failureCount: number) {
    const result = schema.safeParse(message);

    return {
      pass: !result.success && result.error.issues.length === failureCount,
      message: () => {
        const received = this.utils.stringify(message);
        const type = message.getType().typeName;

        let output = this.utils.matcherHint(`toBeInvalid`, received, type, this);
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
