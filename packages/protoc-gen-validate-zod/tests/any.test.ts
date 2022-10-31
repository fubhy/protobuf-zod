import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: {} }).toBeValid("tests.harness.cases.AnyNone");
});

it("required - valid", () => {
  expect({ val: {} }).toBeValid("tests.harness.cases.AnyRequired");
});

it("required - invalid", () => {
  expect({}).toBeInvalid("tests.harness.cases.AnyRequired", 1);
});

it("in - valid", () => {
  expect({ val: { value: "0s", "@type": "type.googleapis.com/google.protobuf.Duration" } }).toBeValid(
    "tests.harness.cases.AnyIn"
  );
});

it("in - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.AnyIn");
});

it("in - invalid", () => {
  expect({
    val: { value: "1970-01-01T00:00:00Z", "@type": "type.googleapis.com/google.protobuf.Timestamp" },
  }).toBeInvalid("tests.harness.cases.AnyIn", 1);
});

it("not in - valid", () => {
  expect({ val: { value: "0s", "@type": "type.googleapis.com/google.protobuf.Duration" } }).toBeValid(
    "tests.harness.cases.AnyNotIn"
  );
});

it("not in - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.AnyNotIn");
});

it("not in - invalid", () => {
  expect({
    val: { value: "1970-01-01T00:00:00Z", "@type": "type.googleapis.com/google.protobuf.Timestamp" },
  }).toBeInvalid("tests.harness.cases.AnyNotIn", 1);
});
