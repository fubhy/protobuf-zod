import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: { "123": true, "456": false } }).toBeValid("tests.harness.cases.MapNone");
});

it("min pairs - valid", () => {
  expect({ val: { "1": 2, "3": 4, "5": 6 } }).toBeValid("tests.harness.cases.MapMin");
});

it("min pairs - valid (equal)", () => {
  expect({ val: { "1": 2, "3": 4 } }).toBeValid("tests.harness.cases.MapMin");
});

it("min pairs - invalid", () => {
  expect({ val: { "1": 2 } }).toBeInvalid("tests.harness.cases.MapMin", 1);
});

it("max pairs - valid", () => {
  expect({ val: { "1": 2, "3": 4 } }).toBeValid("tests.harness.cases.MapMax");
});

it("max pairs - valid (equal)", () => {
  expect({ val: { "1": 2, "3": 4, "5": 6 } }).toBeValid("tests.harness.cases.MapMax");
});

it("max pairs - invalid", () => {
  expect({ val: { "1": 2, "3": 4, "5": 6, "7": 8 } }).toBeInvalid("tests.harness.cases.MapMax", 1);
});

it("min/max - valid", () => {
  expect({ val: { a: true, b: false, c: true } }).toBeValid("tests.harness.cases.MapMinMax");
});

it("min/max - valid (min)", () => {
  expect({ val: { a: true, b: false } }).toBeValid("tests.harness.cases.MapMinMax");
});

it("min/max - valid (max)", () => {
  expect({ val: { a: true, b: false, c: true, d: false } }).toBeValid("tests.harness.cases.MapMinMax");
});

it("min/max - invalid (below)", () => {
  expect({}).toBeInvalid("tests.harness.cases.MapMinMax", 1);
});

it("min/max - invalid (above)", () => {
  expect({ val: { a: true, b: false, c: true, d: false, e: true } }).toBeInvalid("tests.harness.cases.MapMinMax", 1);
});

it("exact - valid", () => {
  expect({ val: { "1": "a", "2": "b", "3": "c" } }).toBeValid("tests.harness.cases.MapExact");
});

it("exact - invalid (below)", () => {
  expect({ val: { "1": "a", "2": "b" } }).toBeInvalid("tests.harness.cases.MapExact", 1);
});

it("exact - invalid (above)", () => {
  expect({ val: { "1": "a", "2": "b", "3": "c", "4": "d" } }).toBeInvalid("tests.harness.cases.MapExact", 1);
});

it("no sparse - valid", () => {
  expect({ val: { "1": {}, "2": {} } }).toBeValid("tests.harness.cases.MapNoSparse");
});

it("no sparse - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.MapNoSparse");
});

it("keys - valid", () => {
  expect({ val: { "-2": "b", "-1": "a" } }).toBeValid("tests.harness.cases.MapKeys");
});

it("keys - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.MapKeys");
});

it("keys - valid (pattern)", () => {
  expect({ val: { A: "a" } }).toBeValid("tests.harness.cases.MapKeysPattern");
});

it("keys - invalid", () => {
  expect({ val: { "1": "a" } }).toBeInvalid("tests.harness.cases.MapKeys", 1);
});

it("keys - invalid (pattern)", () => {
  expect({ val: { "!@#$%^&*()": "b", A: "a" } }).toBeInvalid("tests.harness.cases.MapKeysPattern", 1);
});

it("values - valid", () => {
  expect({ val: { a: "Alpha", b: "Beta" } }).toBeValid("tests.harness.cases.MapValues");
});

it("values - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.MapValues");
});

it("values - valid (pattern)", () => {
  expect({ val: { a: "A" } }).toBeValid("tests.harness.cases.MapValuesPattern");
});

it("values - invalid", () => {
  expect({ val: { a: "A", b: "B" } }).toBeInvalid("tests.harness.cases.MapValues", 2);
});

it("values - invalid (pattern)", () => {
  expect({ val: { a: "A", b: "!@#$%^&*()" } }).toBeInvalid("tests.harness.cases.MapValuesPattern", 1);
});

it("recursive - valid", () => {
  expect({ val: { "1": { val: "abc" } } }).toBeValid("tests.harness.cases.MapRecursive");
});

it("recursive - invalid", () => {
  expect({ val: { "1": {} } }).toBeInvalid("tests.harness.cases.MapRecursive", 1);
});

it("exact - valid (ignore_empty)", () => {
  expect({}).toBeValid("tests.harness.cases.MapExactIgnore");
});

it("multiple - valid", () => {
  expect({ first: { "1": "a", "2": "b" }, second: { "-2": false, "-1": true } }).toBeValid(
    "tests.harness.cases.MultipleMaps"
  );
});
