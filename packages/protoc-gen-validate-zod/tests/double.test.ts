import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: -1.23456 }).toBeValid("tests.harness.cases.DoubleNone");
});

it("const - valid", () => {
  expect({ val: 1.23 }).toBeValid("tests.harness.cases.DoubleConst");
});

it("const - invalid", () => {
  expect({ val: 4.56 }).toBeInvalid("tests.harness.cases.DoubleConst", 1);
});

it("in - valid", () => {
  expect({ val: 7.89 }).toBeValid("tests.harness.cases.DoubleIn");
});

it("in - invalid", () => {
  expect({ val: 10.11 }).toBeInvalid("tests.harness.cases.DoubleIn", 1);
});

it("not in - valid", () => {
  expect({ val: 1 }).toBeValid("tests.harness.cases.DoubleNotIn");
});

it("not in - invalid", () => {
  expect({}).toBeInvalid("tests.harness.cases.DoubleNotIn", 1);
});

it("lt - valid", () => {
  expect({ val: -1 }).toBeValid("tests.harness.cases.DoubleLT");
});

it("lt - invalid (equal)", () => {
  expect({}).toBeInvalid("tests.harness.cases.DoubleLT", 1);
});

it("lt - invalid", () => {
  expect({ val: 1 }).toBeInvalid("tests.harness.cases.DoubleLT", 1);
});

it("lte - valid", () => {
  expect({ val: 63 }).toBeValid("tests.harness.cases.DoubleLTE");
});

it("lte - valid (equal)", () => {
  expect({ val: 64 }).toBeValid("tests.harness.cases.DoubleLTE");
});

it("lte - invalid", () => {
  expect({ val: 65 }).toBeInvalid("tests.harness.cases.DoubleLTE", 1);
});

it("gt - valid", () => {
  expect({ val: 17 }).toBeValid("tests.harness.cases.DoubleGT");
});

it("gt - invalid (equal)", () => {
  expect({ val: 16 }).toBeInvalid("tests.harness.cases.DoubleGT", 1);
});

it("gt - invalid", () => {
  expect({ val: 15 }).toBeInvalid("tests.harness.cases.DoubleGT", 1);
});

it("gte - valid", () => {
  expect({ val: 9 }).toBeValid("tests.harness.cases.DoubleGTE");
});

it("gte - valid (equal)", () => {
  expect({ val: 8 }).toBeValid("tests.harness.cases.DoubleGTE");
});

it("gte - invalid", () => {
  expect({ val: 7 }).toBeInvalid("tests.harness.cases.DoubleGTE", 1);
});

it("gt & lt - valid", () => {
  expect({ val: 5 }).toBeValid("tests.harness.cases.DoubleGTLT");
});

it("gt & lt - invalid (above)", () => {
  expect({ val: 11 }).toBeInvalid("tests.harness.cases.DoubleGTLT", 1);
});

it("gt & lt - invalid (below)", () => {
  expect({ val: -1 }).toBeInvalid("tests.harness.cases.DoubleGTLT", 1);
});

it("gt & lt - invalid (max)", () => {
  expect({ val: 10 }).toBeInvalid("tests.harness.cases.DoubleGTLT", 1);
});

it("gt & lt - invalid (min)", () => {
  expect({}).toBeInvalid("tests.harness.cases.DoubleGTLT", 1);
});

it("exclusive gt & lt - valid (above)", () => {
  expect({ val: 11 }).toBeValid("tests.harness.cases.DoubleExLTGT");
});

it("exclusive gt & lt - valid (below)", () => {
  expect({ val: -1 }).toBeValid("tests.harness.cases.DoubleExLTGT");
});

it("exclusive gt & lt - invalid", () => {
  expect({ val: 5 }).toBeInvalid("tests.harness.cases.DoubleExLTGT", 1);
});

it("exclusive gt & lt - invalid (max)", () => {
  expect({ val: 10 }).toBeInvalid("tests.harness.cases.DoubleExLTGT", 1);
});

it("exclusive gt & lt - invalid (min)", () => {
  expect({}).toBeInvalid("tests.harness.cases.DoubleExLTGT", 1);
});

it("gte & lte - valid", () => {
  expect({ val: 200 }).toBeValid("tests.harness.cases.DoubleGTELTE");
});

it("gte & lte - valid (max)", () => {
  expect({ val: 256 }).toBeValid("tests.harness.cases.DoubleGTELTE");
});

it("gte & lte - valid (min)", () => {
  expect({ val: 128 }).toBeValid("tests.harness.cases.DoubleGTELTE");
});

it("gte & lte - invalid (above)", () => {
  expect({ val: 300 }).toBeInvalid("tests.harness.cases.DoubleGTELTE", 1);
});

it("gte & lte - invalid (below)", () => {
  expect({ val: 100 }).toBeInvalid("tests.harness.cases.DoubleGTELTE", 1);
});

it("exclusive gte & lte - valid (above)", () => {
  expect({ val: 300 }).toBeValid("tests.harness.cases.DoubleExGTELTE");
});

it("exclusive gte & lte - valid (below)", () => {
  expect({ val: 100 }).toBeValid("tests.harness.cases.DoubleExGTELTE");
});

it("exclusive gte & lte - valid (max)", () => {
  expect({ val: 256 }).toBeValid("tests.harness.cases.DoubleExGTELTE");
});

it("exclusive gte & lte - valid (min)", () => {
  expect({ val: 128 }).toBeValid("tests.harness.cases.DoubleExGTELTE");
});

it("exclusive gte & lte - invalid", () => {
  expect({ val: 200 }).toBeInvalid("tests.harness.cases.DoubleExGTELTE", 1);
});

it("ignore_empty gte & lte - valid", () => {
  expect({}).toBeValid("tests.harness.cases.DoubleIgnore");
});
