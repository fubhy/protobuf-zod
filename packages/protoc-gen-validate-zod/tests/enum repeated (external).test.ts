import { it, expect } from "vitest";

it("defined_only - valid", () => {
  expect({ val: ["VALUE"] }).toBeValid("tests.harness.cases.RepeatedExternalEnumDefined");
});

it("defined_only - invalid", () => {
  expect({ val: [2147483647] }).toBeInvalid("tests.harness.cases.RepeatedExternalEnumDefined", 1);
});
