import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: {} }).toBeValid("tests.harness.cases.MessageNone");
});

it("none - valid (unset)", () => {
  expect({}).toBeValid("tests.harness.cases.MessageNone");
});

it("disabled - valid", () => {
  expect({ val: "456" }).toBeValid("tests.harness.cases.MessageDisabled");
});

it("disabled - valid (invalid field)", () => {
  expect({}).toBeValid("tests.harness.cases.MessageDisabled");
});

it("ignored - valid", () => {
  expect({ val: "456" }).toBeValid("tests.harness.cases.MessageIgnored");
});

it("ignored - valid (invalid field)", () => {
  expect({}).toBeValid("tests.harness.cases.MessageIgnored");
});

it("field - valid", () => {
  expect({ val: { const: "foo" } }).toBeValid("tests.harness.cases.Message");
});

it("field - valid (unset)", () => {
  expect({}).toBeValid("tests.harness.cases.Message");
});

it("field - invalid", () => {
  expect({ val: {} }).toBeInvalid("tests.harness.cases.Message", 1);
});

it("field - invalid (transitive)", () => {
  expect({ val: { const: "foo", nested: {} } }).toBeInvalid("tests.harness.cases.Message", 1);
});

it("skip - valid", () => {
  expect({ val: {} }).toBeValid("tests.harness.cases.MessageSkip");
});

it("required - valid", () => {
  expect({ val: { const: "foo" } }).toBeValid("tests.harness.cases.MessageRequired");
});

it("required - valid (oneof)", () => {
  expect({ val: { const: "foo" } }).toBeValid("tests.harness.cases.MessageRequiredOneof");
});

it("required - invalid", () => {
  expect({}).toBeInvalid("tests.harness.cases.MessageRequired", 1);
});

it("required - invalid (oneof)", () => {
  expect({}).toBeInvalid("tests.harness.cases.MessageRequiredOneof", 1);
});

it("cross-package embed none - valid", () => {
  expect({ val: { val: "1" } }).toBeValid("tests.harness.cases.MessageCrossPackage");
});

it("cross-package embed none - valid (nil)", () => {
  expect({}).toBeValid("tests.harness.cases.MessageCrossPackage");
});

it("cross-package embed none - valid (empty)", () => {
  expect({ val: {} }).toBeInvalid("tests.harness.cases.MessageCrossPackage", 1);
});

it("cross-package embed none - invalid", () => {
  expect({ val: { val: "-1" } }).toBeInvalid("tests.harness.cases.MessageCrossPackage", 1);
});

it("required - valid", () => {
  expect({ val: { const: "foo" } }).toBeValid("tests.harness.cases.MessageRequiredButOptional");
});

it("required - valid (unset)", () => {
  expect({}).toBeValid("tests.harness.cases.MessageRequiredButOptional");
});
