import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: 123 }).toBeValid("tests.harness.cases.UInt32None");
});

it("const - valid", () => {
  expect({ val: 1 }).toBeValid("tests.harness.cases.UInt32Const");
});

it("const - invalid", () => {
  expect({ val: 2 }).toBeInvalid("tests.harness.cases.UInt32Const", 1);
});

it("in - valid", () => {
  expect({ val: 3 }).toBeValid("tests.harness.cases.UInt32In");
});

it("in - invalid", () => {
  expect({ val: 5 }).toBeInvalid("tests.harness.cases.UInt32In", 1);
});

it("not in - valid", () => {
  expect({ val: 1 }).toBeValid("tests.harness.cases.UInt32NotIn");
});

it("not in - invalid", () => {
  expect({}).toBeInvalid("tests.harness.cases.UInt32NotIn", 1);
});

it("lt - valid", () => {
  expect({ val: 4 }).toBeValid("tests.harness.cases.UInt32LT");
});

it("lt - invalid (equal)", () => {
  expect({ val: 5 }).toBeInvalid("tests.harness.cases.UInt32LT", 1);
});

it("lt - invalid", () => {
  expect({ val: 6 }).toBeInvalid("tests.harness.cases.UInt32LT", 1);
});

it("lte - valid", () => {
  expect({ val: 63 }).toBeValid("tests.harness.cases.UInt32LTE");
});

it("lte - valid (equal)", () => {
  expect({ val: 64 }).toBeValid("tests.harness.cases.UInt32LTE");
});

it("lte - invalid", () => {
  expect({ val: 65 }).toBeInvalid("tests.harness.cases.UInt32LTE", 1);
});

it("gt - valid", () => {
  expect({ val: 17 }).toBeValid("tests.harness.cases.UInt32GT");
});

it("gt - invalid (equal)", () => {
  expect({ val: 16 }).toBeInvalid("tests.harness.cases.UInt32GT", 1);
});

it("gt - invalid", () => {
  expect({ val: 15 }).toBeInvalid("tests.harness.cases.UInt32GT", 1);
});

it("gte - valid", () => {
  expect({ val: 9 }).toBeValid("tests.harness.cases.UInt32GTE");
});

it("gte - valid (equal)", () => {
  expect({ val: 8 }).toBeValid("tests.harness.cases.UInt32GTE");
});

it("gte - invalid", () => {
  expect({ val: 7 }).toBeInvalid("tests.harness.cases.UInt32GTE", 1);
});

it("gt & lt - valid", () => {
  expect({ val: 7 }).toBeValid("tests.harness.cases.UInt32GTLT");
});

it("gt & lt - invalid (above)", () => {
  expect({ val: 11 }).toBeInvalid("tests.harness.cases.UInt32GTLT", 1);
});

it("gt & lt - invalid (below)", () => {
  expect({ val: 1 }).toBeInvalid("tests.harness.cases.UInt32GTLT", 1);
});

it("gt & lt - invalid (max)", () => {
  expect({ val: 10 }).toBeInvalid("tests.harness.cases.UInt32GTLT", 1);
});

it("gt & lt - invalid (min)", () => {
  expect({ val: 5 }).toBeInvalid("tests.harness.cases.UInt32GTLT", 1);
});

it("exclusive gt & lt - valid (above)", () => {
  expect({ val: 11 }).toBeValid("tests.harness.cases.UInt32ExLTGT");
});

it("exclusive gt & lt - valid (below)", () => {
  expect({ val: 4 }).toBeValid("tests.harness.cases.UInt32ExLTGT");
});

it("exclusive gt & lt - invalid", () => {
  expect({ val: 7 }).toBeInvalid("tests.harness.cases.UInt32ExLTGT", 1);
});

it("exclusive gt & lt - invalid (max)", () => {
  expect({ val: 10 }).toBeInvalid("tests.harness.cases.UInt32ExLTGT", 1);
});

it("exclusive gt & lt - invalid (min)", () => {
  expect({ val: 5 }).toBeInvalid("tests.harness.cases.UInt32ExLTGT", 1);
});

it("gte & lte - valid", () => {
  expect({ val: 200 }).toBeValid("tests.harness.cases.UInt32GTELTE");
});

it("gte & lte - valid (max)", () => {
  expect({ val: 256 }).toBeValid("tests.harness.cases.UInt32GTELTE");
});

it("gte & lte - valid (min)", () => {
  expect({ val: 128 }).toBeValid("tests.harness.cases.UInt32GTELTE");
});

it("gte & lte - invalid (above)", () => {
  expect({ val: 300 }).toBeInvalid("tests.harness.cases.UInt32GTELTE", 1);
});

it("gte & lte - invalid (below)", () => {
  expect({ val: 100 }).toBeInvalid("tests.harness.cases.UInt32GTELTE", 1);
});

it("exclusive gte & lte - valid (above)", () => {
  expect({ val: 300 }).toBeValid("tests.harness.cases.UInt32ExGTELTE");
});

it("exclusive gte & lte - valid (below)", () => {
  expect({ val: 100 }).toBeValid("tests.harness.cases.UInt32ExGTELTE");
});

it("exclusive gte & lte - valid (max)", () => {
  expect({ val: 256 }).toBeValid("tests.harness.cases.UInt32ExGTELTE");
});

it("exclusive gte & lte - valid (min)", () => {
  expect({ val: 128 }).toBeValid("tests.harness.cases.UInt32ExGTELTE");
});

it("exclusive gte & lte - invalid", () => {
  expect({ val: 200 }).toBeInvalid("tests.harness.cases.UInt32ExGTELTE", 1);
});

it("ignore_empty gte & lte - valid", () => {
  expect({}).toBeValid("tests.harness.cases.UInt32Ignore");
});
