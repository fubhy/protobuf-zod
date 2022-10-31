import { it, expect } from "vitest";

it("const - valid", () => {
  expect({ val: "GAMMA" }).toBeValid("tests.harness.cases.EnumAliasConst");
});

it("const - valid (alias)", () => {
  expect({ val: "GAMMA" }).toBeValid("tests.harness.cases.EnumAliasConst");
});

it("const - invalid", () => {
  expect({}).toBeInvalid("tests.harness.cases.EnumAliasConst", 1);
});

it("defined_only - valid", () => {
  expect({ val: "BETA" }).toBeValid("tests.harness.cases.EnumAliasDefined");
});

it("defined_only - invalid", () => {
  expect({ val: 2147483647 }).toBeInvalid("tests.harness.cases.EnumAliasDefined", 1);
});

it("in - valid", () => {
  expect({}).toBeValid("tests.harness.cases.EnumAliasIn");
});

it("in - valid (alias)", () => {
  expect({}).toBeValid("tests.harness.cases.EnumAliasIn");
});

it("in - invalid", () => {
  expect({ val: "BETA" }).toBeInvalid("tests.harness.cases.EnumAliasIn", 1);
});

it("not in - valid", () => {
  expect({}).toBeValid("tests.harness.cases.EnumAliasNotIn");
});

it("not in - invalid", () => {
  expect({ val: "BETA" }).toBeInvalid("tests.harness.cases.EnumAliasNotIn", 1);
});

it("not in - invalid (alias)", () => {
  expect({ val: "BETA" }).toBeInvalid("tests.harness.cases.EnumAliasNotIn", 1);
});
