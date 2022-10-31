import { it, expect } from "vitest";

it("defined_only - valid", () => {
  expect({ val: ["VALUE"] }).toBeValid("tests.harness.cases.RepeatedYetAnotherExternalEnumDefined");
});
