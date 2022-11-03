import { z } from "zod";

/* eslint-disable no-unused-vars */
declare global {
  namespace Vi {
    interface JestAssertion<T = any> extends jest.Matchers<void, T> {
      toBeValid(schema: z.ZodTypeAny): void;
      toBeInvalid(schema: z.ZodTypeAny, failureCount: number): void;
    }
  }
}

export {};
