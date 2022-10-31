import { it, expect } from "vitest";

it("defined_only - valid", () => {
  expect({}).toBeValid("tests.harness.cases.EnumExternal");
});

it("defined_only - invalid", () => {
  expect({ val: 2147483647 }).toBeInvalid("tests.harness.cases.EnumExternal", 1);
});
