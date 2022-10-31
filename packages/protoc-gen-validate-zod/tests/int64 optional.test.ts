import { it, expect } from "vitest";

it("lte - valid", () => {
  expect({ val: "63" }).toBeValid("tests.harness.cases.Int64LTEOptional");
});

it("lte - valid (equal)", () => {
  expect({ val: "64" }).toBeValid("tests.harness.cases.Int64LTEOptional");
});

it("lte - valid (unset)", () => {
  expect({}).toBeValid("tests.harness.cases.Int64LTEOptional");
});
