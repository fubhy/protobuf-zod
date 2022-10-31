import { it, expect } from "vitest";

it("defined_only - valid", () => {
  expect({ val: { foo: "TWO" } }).toBeValid("tests.harness.cases.MapEnumDefined");
});

it("defined_only - invalid", () => {
  expect({ val: { foo: 2147483647 } }).toBeInvalid("tests.harness.cases.MapEnumDefined", 1);
});
