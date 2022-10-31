import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: true }).toBeValid("tests.harness.cases.BoolNone");
});

it("const (true) - valid", () => {
  expect({ val: true }).toBeValid("tests.harness.cases.BoolConstTrue");
});

it("const (true) - invalid", () => {
  expect({}).toBeInvalid("tests.harness.cases.BoolConstTrue", 1);
});

it("const (false) - valid", () => {
  expect({}).toBeValid("tests.harness.cases.BoolConstFalse");
});

it("const (false) - invalid", () => {
  expect({ val: true }).toBeInvalid("tests.harness.cases.BoolConstFalse", 1);
});
