import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ x: "foo" }).toBeValid("tests.harness.cases.OneOfNone");
});

it("none - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.OneOfNone");
});

it("field - valid (X)", () => {
  expect({ x: "foobar" }).toBeValid("tests.harness.cases.OneOf");
});

it("field - valid (Y)", () => {
  expect({ y: 123 }).toBeValid("tests.harness.cases.OneOf");
});

it("field - valid (Z)", () => {
  expect({ z: { val: true } }).toBeValid("tests.harness.cases.OneOf");
});

it("field - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.OneOf");
});

it("field - invalid (X)", () => {
  expect({ x: "fizzbuzz" }).toBeInvalid("tests.harness.cases.OneOf", 1);
});

it("field - invalid (Y)", () => {
  expect({ y: -1 }).toBeInvalid("tests.harness.cases.OneOf", 1);
});

it("filed - invalid (Z)", () => {
  expect({ z: {} }).toBeInvalid("tests.harness.cases.OneOf", 1);
});

it("required - valid", () => {
  expect({ x: "" }).toBeValid("tests.harness.cases.OneOfRequired");
});

it("require - invalid", () => {
  expect({}).toBeInvalid("tests.harness.cases.OneOfRequired", 1);
});

it("ignore_empty - valid (X)", () => {
  expect({ x: "" }).toBeValid("tests.harness.cases.OneOfIgnoreEmpty");
});

it("ignore_empty - valid (Y)", () => {
  expect({ y: "" }).toBeValid("tests.harness.cases.OneOfIgnoreEmpty");
});

it("ignore_empty - valid (Z)", () => {
  expect({ z: 0 }).toBeValid("tests.harness.cases.OneOfIgnoreEmpty");
});
