import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: "123s" }).toBeValid("tests.harness.cases.DurationNone");
});

it("required - valid", () => {
  expect({ val: "0s" }).toBeValid("tests.harness.cases.DurationRequired");
});

it("required - invalid", () => {
  expect({}).toBeInvalid("tests.harness.cases.DurationRequired", 1);
});

it("const - valid", () => {
  expect({ val: "3s" }).toBeValid("tests.harness.cases.DurationConst");
});

it("const - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.DurationConst");
});

it("const - invalid", () => {
  expect({ val: "0.000000003s" }).toBeInvalid("tests.harness.cases.DurationConst", 1);
});

it("in - valid", () => {
  expect({ val: "1s" }).toBeValid("tests.harness.cases.DurationIn");
});

it("in - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.DurationIn");
});

it("in - invalid", () => {
  expect({ val: "0s" }).toBeInvalid("tests.harness.cases.DurationIn", 1);
});

it("not in - valid", () => {
  expect({ val: "0.000000001s" }).toBeValid("tests.harness.cases.DurationNotIn");
});

it("not in - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.DurationNotIn");
});

it("not in - invalid", () => {
  expect({ val: "0s" }).toBeInvalid("tests.harness.cases.DurationNotIn", 1);
});

it("lt - valid", () => {
  expect({ val: "0.000000001s" }).toBeValid("tests.harness.cases.DurationLT");
});

it("lt - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.DurationLT");
});

it("lt - invalid (equal)", () => {
  expect({ val: "0s" }).toBeInvalid("tests.harness.cases.DurationLT", 1);
});

it("lt - invalid", () => {
  expect({ val: "1s" }).toBeInvalid("tests.harness.cases.DurationLT", 1);
});

it("lte - valid", () => {
  expect({ val: "0s" }).toBeValid("tests.harness.cases.DurationLTE");
});

it("lte - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.DurationLTE");
});

it("lte - valid (equal)", () => {
  expect({ val: "1s" }).toBeValid("tests.harness.cases.DurationLTE");
});

it("lte - invalid", () => {
  expect({ val: "1.000000001s" }).toBeInvalid("tests.harness.cases.DurationLTE", 1);
});

it("gt - valid", () => {
  expect({ val: "1s" }).toBeValid("tests.harness.cases.DurationGT");
});

it("gt - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.DurationGT");
});

it("gt - invalid (equal)", () => {
  expect({ val: "0.000001s" }).toBeInvalid("tests.harness.cases.DurationGT", 1);
});

it("gt - invalid", () => {
  expect({ val: "0s" }).toBeInvalid("tests.harness.cases.DurationGT", 1);
});

it("gte - valid", () => {
  expect({ val: "3s" }).toBeValid("tests.harness.cases.DurationGTE");
});

it("gte - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.DurationGTE");
});

it("gte - valid (equal)", () => {
  expect({ val: "0.001s" }).toBeValid("tests.harness.cases.DurationGTE");
});

it("gte - invalid", () => {
  expect({ val: "-1s" }).toBeInvalid("tests.harness.cases.DurationGTE", 1);
});

it("gt & lt - valid", () => {
  expect({ val: "0.000001s" }).toBeValid("tests.harness.cases.DurationGTLT");
});

it("gt & lt - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.DurationGTLT");
});

it("gt & lt - invalid (above)", () => {
  expect({ val: "1000s" }).toBeInvalid("tests.harness.cases.DurationGTLT", 1);
});

it("gt & lt - invalid (below)", () => {
  expect({ val: "0.000001s" }).toBeInvalid("tests.harness.cases.DurationGTLT", 1);
});

it("gt & lt - invalid (max)", () => {
  expect({ val: "1s" }).toBeInvalid("tests.harness.cases.DurationGTLT", 1);
});

it("gt & lt - invalid (min)", () => {
  expect({ val: "0s" }).toBeInvalid("tests.harness.cases.DurationGTLT", 1);
});

it("exclusive gt & lt - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.DurationExLTGT");
});

it("exclusive gt & lt - valid (above)", () => {
  expect({ val: "2s" }).toBeValid("tests.harness.cases.DurationExLTGT");
});

it("exclusive gt & lt - valid (below)", () => {
  expect({ val: "0.000000001s" }).toBeValid("tests.harness.cases.DurationExLTGT");
});

it("exclusive gt & lt - invalid", () => {
  expect({ val: "0.000001s" }).toBeInvalid("tests.harness.cases.DurationExLTGT", 1);
});

it("exclusive gt & lt - invalid (max)", () => {
  expect({ val: "1s" }).toBeInvalid("tests.harness.cases.DurationExLTGT", 1);
});

it("exclusive gt & lt - invalid (min)", () => {
  expect({ val: "0s" }).toBeInvalid("tests.harness.cases.DurationExLTGT", 1);
});

it("gte & lte - valid", () => {
  expect({ val: "60.000000001s" }).toBeValid("tests.harness.cases.DurationGTELTE");
});

it("gte & lte - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.DurationGTELTE");
});

it("gte & lte - valid (max)", () => {
  expect({ val: "3600s" }).toBeValid("tests.harness.cases.DurationGTELTE");
});

it("gte & lte - valid (min)", () => {
  expect({ val: "60s" }).toBeValid("tests.harness.cases.DurationGTELTE");
});

it("gte & lte - invalid (above)", () => {
  expect({ val: "3600.000000001s" }).toBeInvalid("tests.harness.cases.DurationGTELTE", 1);
});

it("gte & lte - invalid (below)", () => {
  expect({ val: "59s" }).toBeInvalid("tests.harness.cases.DurationGTELTE", 1);
});

it("gte & lte - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.DurationExGTELTE");
});

it("exclusive gte & lte - valid (above)", () => {
  expect({ val: "3601s" }).toBeValid("tests.harness.cases.DurationExGTELTE");
});

it("exclusive gte & lte - valid (below)", () => {
  expect({ val: "0s" }).toBeValid("tests.harness.cases.DurationExGTELTE");
});

it("exclusive gte & lte - valid (max)", () => {
  expect({ val: "3600s" }).toBeValid("tests.harness.cases.DurationExGTELTE");
});

it("exclusive gte & lte - valid (min)", () => {
  expect({ val: "60s" }).toBeValid("tests.harness.cases.DurationExGTELTE");
});

it("exclusive gte & lte - invalid", () => {
  expect({ val: "61s" }).toBeInvalid("tests.harness.cases.DurationExGTELTE", 1);
});

it("fields with other fields - invalid other field", () => {
  expect({ intVal: 12 }).toBeInvalid("tests.harness.cases.DurationFieldWithOtherFields", 1);
});
