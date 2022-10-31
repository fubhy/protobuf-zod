import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: 123 }).toBeValid("tests.harness.cases.WrapperNone");
});

it("none - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.WrapperNone");
});

it("float - valid", () => {
  expect({ val: 1 }).toBeValid("tests.harness.cases.WrapperFloat");
});

it("float - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.WrapperFloat");
});

it("float - invalid", () => {
  expect({ val: 0 }).toBeInvalid("tests.harness.cases.WrapperFloat", 1);
});

it("double - valid", () => {
  expect({ val: 1 }).toBeValid("tests.harness.cases.WrapperDouble");
});

it("double - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.WrapperDouble");
});

it("double - invalid", () => {
  expect({ val: 0 }).toBeInvalid("tests.harness.cases.WrapperDouble", 1);
});

it("int64 - valid", () => {
  expect({ val: "1" }).toBeValid("tests.harness.cases.WrapperInt64");
});

it("int64 - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.WrapperInt64");
});

it("int64 - invalid", () => {
  expect({ val: "0" }).toBeInvalid("tests.harness.cases.WrapperInt64", 1);
});

it("int32 - valid", () => {
  expect({ val: 1 }).toBeValid("tests.harness.cases.WrapperInt32");
});

it("int32 - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.WrapperInt32");
});

it("int32 - invalid", () => {
  expect({ val: 0 }).toBeInvalid("tests.harness.cases.WrapperInt32", 1);
});

it("uint64 - valid", () => {
  expect({ val: "1" }).toBeValid("tests.harness.cases.WrapperUInt64");
});

it("uint64 - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.WrapperUInt64");
});

it("uint64 - invalid", () => {
  expect({ val: "0" }).toBeInvalid("tests.harness.cases.WrapperUInt64", 1);
});

it("uint32 - valid", () => {
  expect({ val: 1 }).toBeValid("tests.harness.cases.WrapperUInt32");
});

it("uint32 - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.WrapperUInt32");
});

it("uint32 - invalid", () => {
  expect({ val: 0 }).toBeInvalid("tests.harness.cases.WrapperUInt32", 1);
});

it("bool - valid", () => {
  expect({ val: true }).toBeValid("tests.harness.cases.WrapperBool");
});

it("bool - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.WrapperBool");
});

it("bool - invalid", () => {
  expect({ val: false }).toBeInvalid("tests.harness.cases.WrapperBool", 1);
});

it("string - valid", () => {
  expect({ val: "foobar" }).toBeValid("tests.harness.cases.WrapperString");
});

it("string - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.WrapperString");
});

it("string - invalid", () => {
  expect({ val: "fizzbuzz" }).toBeInvalid("tests.harness.cases.WrapperString", 1);
});

it("bytes - valid", () => {
  expect({ val: "Zm9v" }).toBeValid("tests.harness.cases.WrapperBytes");
});

it("bytes - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.WrapperBytes");
});

it("bytes - invalid", () => {
  expect({ val: "eA==" }).toBeInvalid("tests.harness.cases.WrapperBytes", 1);
});

it("required - string - valid", () => {
  expect({ val: "bar" }).toBeValid("tests.harness.cases.WrapperRequiredString");
});

it("required - string - invalid", () => {
  expect({ val: "foo" }).toBeInvalid("tests.harness.cases.WrapperRequiredString", 1);
});

it("required - string - invalid (empty)", () => {
  expect({}).toBeInvalid("tests.harness.cases.WrapperRequiredString", 1);
});

it("required - string (empty) - valid", () => {
  expect({ val: "" }).toBeValid("tests.harness.cases.WrapperRequiredEmptyString");
});

it("required - string (empty) - invalid", () => {
  expect({ val: "foo" }).toBeInvalid("tests.harness.cases.WrapperRequiredEmptyString", 1);
});

it("required - string (empty) - invalid (empty)", () => {
  expect({}).toBeInvalid("tests.harness.cases.WrapperRequiredEmptyString", 1);
});

it("optional - string (uuid) - valid", () => {
  expect({ val: "8b72987b-024a-43b3-b4cf-647a1f925c5d" }).toBeValid("tests.harness.cases.WrapperOptionalUuidString");
});

it("optional - string (uuid) - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.WrapperOptionalUuidString");
});

it("optional - string (uuid) - invalid", () => {
  expect({ val: "foo" }).toBeInvalid("tests.harness.cases.WrapperOptionalUuidString", 1);
});

it("required - float - valid", () => {
  expect({ val: 1 }).toBeValid("tests.harness.cases.WrapperRequiredFloat");
});

it("required - float - invalid", () => {
  expect({ val: -5 }).toBeInvalid("tests.harness.cases.WrapperRequiredFloat", 1);
});

it("required - float - invalid (empty)", () => {
  expect({}).toBeInvalid("tests.harness.cases.WrapperRequiredFloat", 1);
});
