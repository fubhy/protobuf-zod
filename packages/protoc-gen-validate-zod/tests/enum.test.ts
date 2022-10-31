import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: "ONE" }).toBeValid("tests.harness.cases.EnumNone");
});

it("const - valid", () => {
  expect({ val: "TWO" }).toBeValid("tests.harness.cases.EnumConst");
});

it("const - invalid", () => {
  expect({ val: "ONE" }).toBeInvalid("tests.harness.cases.EnumConst", 1);
});

it("defined_only - valid", () => {
  expect({}).toBeValid("tests.harness.cases.EnumDefined");
});

it("defined_only - invalid", () => {
  expect({ val: 2147483647 }).toBeInvalid("tests.harness.cases.EnumDefined", 1);
});

it("in - valid", () => {
  expect({ val: "TWO" }).toBeValid("tests.harness.cases.EnumIn");
});

it("in - invalid", () => {
  expect({ val: "ONE" }).toBeInvalid("tests.harness.cases.EnumIn", 1);
});

it("not in - valid", () => {
  expect({}).toBeValid("tests.harness.cases.EnumNotIn");
});

it("not in - valid (undefined)", () => {
  expect({ val: 2147483647 }).toBeValid("tests.harness.cases.EnumNotIn");
});

it("not in - invalid", () => {
  expect({ val: "ONE" }).toBeInvalid("tests.harness.cases.EnumNotIn", 1);
});
