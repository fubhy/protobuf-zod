import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: -1.2345600128173828 }).toBeValid("tests.harness.cases.FloatNone");
});

it("const - valid", () => {
  expect({ val: 1.2300000190734863 }).toBeValid("tests.harness.cases.FloatConst");
});

it("const - invalid", () => {
  expect({ val: 4.559999942779541 }).toBeInvalid("tests.harness.cases.FloatConst", 1);
});

it("in - valid", () => {
  expect({ val: 7.889999866485596 }).toBeValid("tests.harness.cases.FloatIn");
});

it("in - invalid", () => {
  expect({ val: 10.109999656677246 }).toBeInvalid("tests.harness.cases.FloatIn", 1);
});

it("not in - valid", () => {
  expect({ val: 1 }).toBeValid("tests.harness.cases.FloatNotIn");
});

it("not in - invalid", () => {
  expect({}).toBeInvalid("tests.harness.cases.FloatNotIn", 1);
});

it("lt - valid", () => {
  expect({ val: -1 }).toBeValid("tests.harness.cases.FloatLT");
});

it("lt - invalid (equal)", () => {
  expect({}).toBeInvalid("tests.harness.cases.FloatLT", 1);
});

it("lt - invalid", () => {
  expect({ val: 1 }).toBeInvalid("tests.harness.cases.FloatLT", 1);
});

it("lte - valid", () => {
  expect({ val: 63 }).toBeValid("tests.harness.cases.FloatLTE");
});

it("lte - valid (equal)", () => {
  expect({ val: 64 }).toBeValid("tests.harness.cases.FloatLTE");
});

it("lte - invalid", () => {
  expect({ val: 65 }).toBeInvalid("tests.harness.cases.FloatLTE", 1);
});

it("gt - valid", () => {
  expect({ val: 17 }).toBeValid("tests.harness.cases.FloatGT");
});

it("gt - invalid (equal)", () => {
  expect({ val: 16 }).toBeInvalid("tests.harness.cases.FloatGT", 1);
});

it("gt - invalid", () => {
  expect({ val: 15 }).toBeInvalid("tests.harness.cases.FloatGT", 1);
});

it("gte - valid", () => {
  expect({ val: 9 }).toBeValid("tests.harness.cases.FloatGTE");
});

it("gte - valid (equal)", () => {
  expect({ val: 8 }).toBeValid("tests.harness.cases.FloatGTE");
});

it("gte - invalid", () => {
  expect({ val: 7 }).toBeInvalid("tests.harness.cases.FloatGTE", 1);
});

it("gt & lt - valid", () => {
  expect({ val: 5 }).toBeValid("tests.harness.cases.FloatGTLT");
});

it("gt & lt - invalid (above)", () => {
  expect({ val: 11 }).toBeInvalid("tests.harness.cases.FloatGTLT", 1);
});

it("gt & lt - invalid (below)", () => {
  expect({ val: -1 }).toBeInvalid("tests.harness.cases.FloatGTLT", 1);
});

it("gt & lt - invalid (max)", () => {
  expect({ val: 10 }).toBeInvalid("tests.harness.cases.FloatGTLT", 1);
});

it("gt & lt - invalid (min)", () => {
  expect({}).toBeInvalid("tests.harness.cases.FloatGTLT", 1);
});

it("exclusive gt & lt - valid (above)", () => {
  expect({ val: 11 }).toBeValid("tests.harness.cases.FloatExLTGT");
});

it("exclusive gt & lt - valid (below)", () => {
  expect({ val: -1 }).toBeValid("tests.harness.cases.FloatExLTGT");
});

it("exclusive gt & lt - invalid", () => {
  expect({ val: 5 }).toBeInvalid("tests.harness.cases.FloatExLTGT", 1);
});

it("exclusive gt & lt - invalid (max)", () => {
  expect({ val: 10 }).toBeInvalid("tests.harness.cases.FloatExLTGT", 1);
});

it("exclusive gt & lt - invalid (min)", () => {
  expect({}).toBeInvalid("tests.harness.cases.FloatExLTGT", 1);
});

it("gte & lte - valid", () => {
  expect({ val: 200 }).toBeValid("tests.harness.cases.FloatGTELTE");
});

it("gte & lte - valid (max)", () => {
  expect({ val: 256 }).toBeValid("tests.harness.cases.FloatGTELTE");
});

it("gte & lte - valid (min)", () => {
  expect({ val: 128 }).toBeValid("tests.harness.cases.FloatGTELTE");
});

it("gte & lte - invalid (above)", () => {
  expect({ val: 300 }).toBeInvalid("tests.harness.cases.FloatGTELTE", 1);
});

it("gte & lte - invalid (below)", () => {
  expect({ val: 100 }).toBeInvalid("tests.harness.cases.FloatGTELTE", 1);
});

it("exclusive gte & lte - valid (above)", () => {
  expect({ val: 300 }).toBeValid("tests.harness.cases.FloatExGTELTE");
});

it("exclusive gte & lte - valid (below)", () => {
  expect({ val: 100 }).toBeValid("tests.harness.cases.FloatExGTELTE");
});

it("exclusive gte & lte - valid (max)", () => {
  expect({ val: 256 }).toBeValid("tests.harness.cases.FloatExGTELTE");
});

it("exclusive gte & lte - valid (min)", () => {
  expect({ val: 128 }).toBeValid("tests.harness.cases.FloatExGTELTE");
});

it("exclusive gte & lte - invalid", () => {
  expect({ val: 200 }).toBeInvalid("tests.harness.cases.FloatExGTELTE", 1);
});

it("ignore_empty gte & lte - valid", () => {
  expect({}).toBeValid("tests.harness.cases.FloatIgnore");
});
