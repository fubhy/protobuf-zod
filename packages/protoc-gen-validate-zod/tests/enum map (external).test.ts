import { it, expect } from "vitest";

it("defined_only - valid", () => {
  expect({ val: { foo: "VALUE" } }).toBeValid("tests.harness.cases.MapExternalEnumDefined");
});

it("defined_only - invalid", () => {
  expect({ val: { foo: 2147483647 } }).toBeInvalid("tests.harness.cases.MapExternalEnumDefined", 1);
});
