import { it, expect } from "vitest";

it("defined_only - valid", () => {
  expect({ val: ["ONE", "TWO"] }).toBeValid("tests.harness.cases.RepeatedEnumDefined");
});

it("defined_only - invalid", () => {
  expect({ val: ["ONE", 2147483647] }).toBeInvalid("tests.harness.cases.RepeatedEnumDefined", 1);
});
