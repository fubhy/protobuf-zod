import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: "1970-01-01T00:02:03Z" }).toBeValid("tests.harness.cases.TimestampNone");
});

it("required - valid", () => {
  expect({ val: "1970-01-01T00:00:00Z" }).toBeValid("tests.harness.cases.TimestampRequired");
});

it("required - invalid", () => {
  expect({}).toBeInvalid("tests.harness.cases.TimestampRequired", 1);
});

it("const - valid", () => {
  expect({ val: "1970-01-01T00:00:03Z" }).toBeValid("tests.harness.cases.TimestampConst");
});

it("const - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampConst");
});

it("const - invalid", () => {
  expect({ val: "1970-01-01T00:00:00.000000003Z" }).toBeInvalid("tests.harness.cases.TimestampConst", 1);
});

it("lt - valid", () => {
  expect({ val: "1969-12-31T23:59:59Z" }).toBeValid("tests.harness.cases.TimestampLT");
});

it("lt - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampLT");
});

it("lt - invalid (equal)", () => {
  expect({ val: "1970-01-01T00:00:00Z" }).toBeInvalid("tests.harness.cases.TimestampLT", 1);
});

it("lt - invalid", () => {
  expect({ val: "1970-01-01T00:00:01Z" }).toBeInvalid("tests.harness.cases.TimestampLT", 1);
});

it("lte - valid", () => {
  expect({ val: "1970-01-01T00:00:00Z" }).toBeValid("tests.harness.cases.TimestampLTE");
});

it("lte - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampLTE");
});

it("lte - valid (equal)", () => {
  expect({ val: "1970-01-01T00:00:01Z" }).toBeValid("tests.harness.cases.TimestampLTE");
});

it("lte - invalid", () => {
  expect({ val: "1970-01-01T00:00:01.000000001Z" }).toBeInvalid("tests.harness.cases.TimestampLTE", 1);
});

it("gt - valid", () => {
  expect({ val: "1970-01-01T00:00:01Z" }).toBeValid("tests.harness.cases.TimestampGT");
});

it("gt - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampGT");
});

it("gt - invalid (equal)", () => {
  expect({ val: "1970-01-01T00:00:00.000001Z" }).toBeInvalid("tests.harness.cases.TimestampGT", 1);
});

it("gt - invalid", () => {
  expect({ val: "1970-01-01T00:00:00Z" }).toBeInvalid("tests.harness.cases.TimestampGT", 1);
});

it("gte - valid", () => {
  expect({ val: "1970-01-01T00:00:03Z" }).toBeValid("tests.harness.cases.TimestampGTE");
});

it("gte - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampGTE");
});

it("gte - valid (equal)", () => {
  expect({ val: "1970-01-01T00:00:00.001Z" }).toBeValid("tests.harness.cases.TimestampGTE");
});

it("gte - invalid", () => {
  expect({ val: "1969-12-31T23:59:59Z" }).toBeInvalid("tests.harness.cases.TimestampGTE", 1);
});

it("gt & lt - valid", () => {
  expect({ val: "1970-01-01T00:00:00.000001Z" }).toBeValid("tests.harness.cases.TimestampGTLT");
});

it("gt & lt - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampGTLT");
});

it("gt & lt - invalid (above)", () => {
  expect({ val: "1970-01-01T00:16:40Z" }).toBeInvalid("tests.harness.cases.TimestampGTLT", 1);
});

it("gt & lt - invalid (below)", () => {
  expect({ val: "1969-12-31T23:43:20Z" }).toBeInvalid("tests.harness.cases.TimestampGTLT", 1);
});

it("gt & lt - invalid (max)", () => {
  expect({ val: "1970-01-01T00:00:01Z" }).toBeInvalid("tests.harness.cases.TimestampGTLT", 1);
});

it("gt & lt - invalid (min)", () => {
  expect({ val: "1970-01-01T00:00:00Z" }).toBeInvalid("tests.harness.cases.TimestampGTLT", 1);
});

it("exclusive gt & lt - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampExLTGT");
});

it("exclusive gt & lt - valid (above)", () => {
  expect({ val: "1970-01-01T00:00:02Z" }).toBeValid("tests.harness.cases.TimestampExLTGT");
});

it("exclusive gt & lt - valid (below)", () => {
  expect({ val: "1969-12-31T23:59:59Z" }).toBeValid("tests.harness.cases.TimestampExLTGT");
});

it("exclusive gt & lt - invalid", () => {
  expect({ val: "1970-01-01T00:00:00.000001Z" }).toBeInvalid("tests.harness.cases.TimestampExLTGT", 1);
});

it("exclusive gt & lt - invalid (max)", () => {
  expect({ val: "1970-01-01T00:00:01Z" }).toBeInvalid("tests.harness.cases.TimestampExLTGT", 1);
});

it("exclusive gt & lt - invalid (min)", () => {
  expect({ val: "1970-01-01T00:00:00Z" }).toBeInvalid("tests.harness.cases.TimestampExLTGT", 1);
});

it("gte & lte - valid", () => {
  expect({ val: "1970-01-01T00:01:00.000000001Z" }).toBeValid("tests.harness.cases.TimestampGTELTE");
});

it("gte & lte - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampGTELTE");
});

it("gte & lte - valid (max)", () => {
  expect({ val: "1970-01-01T01:00:00Z" }).toBeValid("tests.harness.cases.TimestampGTELTE");
});

it("gte & lte - valid (min)", () => {
  expect({ val: "1970-01-01T00:01:00Z" }).toBeValid("tests.harness.cases.TimestampGTELTE");
});

it("gte & lte - invalid (above)", () => {
  expect({ val: "1970-01-01T01:00:00.000000001Z" }).toBeInvalid("tests.harness.cases.TimestampGTELTE", 1);
});

it("gte & lte - invalid (below)", () => {
  expect({ val: "1970-01-01T00:00:59Z" }).toBeInvalid("tests.harness.cases.TimestampGTELTE", 1);
});

it("gte & lte - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampExGTELTE");
});

it("exclusive gte & lte - valid (above)", () => {
  expect({ val: "1970-01-01T01:00:01Z" }).toBeValid("tests.harness.cases.TimestampExGTELTE");
});

it("exclusive gte & lte - valid (below)", () => {
  expect({ val: "1970-01-01T00:00:00Z" }).toBeValid("tests.harness.cases.TimestampExGTELTE");
});

it("exclusive gte & lte - valid (max)", () => {
  expect({ val: "1970-01-01T01:00:00Z" }).toBeValid("tests.harness.cases.TimestampExGTELTE");
});

it("exclusive gte & lte - valid (min)", () => {
  expect({ val: "1970-01-01T00:01:00Z" }).toBeValid("tests.harness.cases.TimestampExGTELTE");
});

it("exclusive gte & lte - invalid", () => {
  expect({ val: "1970-01-01T00:01:01Z" }).toBeInvalid("tests.harness.cases.TimestampExGTELTE", 1);
});

it("lt now - valid", () => {
  expect({ val: "1970-01-01T00:00:00Z" }).toBeValid("tests.harness.cases.TimestampLTNow");
});

it("lt now - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampLTNow");
});

it("lt now - invalid", () => {
  expect({ val: "2022-10-29T10:02:47Z" }).toBeInvalid("tests.harness.cases.TimestampLTNow", 1);
});

it("gt now - valid", () => {
  expect({ val: "2022-10-29T10:02:47Z" }).toBeValid("tests.harness.cases.TimestampGTNow");
});

it("gt now - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampGTNow");
});

it("gt now - invalid", () => {
  expect({ val: "1970-01-01T00:00:00Z" }).toBeInvalid("tests.harness.cases.TimestampGTNow", 1);
});

it("within - valid", () => {
  expect({ val: "2022-10-29T08:02:47.302817500Z" }).toBeValid("tests.harness.cases.TimestampWithin");
});

it("within - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampWithin");
});

it("within - invalid (below)", () => {
  expect({ val: "1970-01-01T00:00:00Z" }).toBeInvalid("tests.harness.cases.TimestampWithin", 1);
});

it("within - invalid (above)", () => {
  expect({ val: "2022-10-29T10:02:47Z" }).toBeInvalid("tests.harness.cases.TimestampWithin", 1);
});

it("lt now within - valid", () => {
  expect({ val: "2022-10-29T07:32:47Z" }).toBeValid("tests.harness.cases.TimestampLTNowWithin");
});

it("lt now within - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampLTNowWithin");
});

it("lt now within - invalid (lt)", () => {
  expect({ val: "2022-10-29T08:32:47Z" }).toBeInvalid("tests.harness.cases.TimestampLTNowWithin", 1);
});

it("lt now within - invalid (within)", () => {
  expect({ val: "2022-10-29T06:02:47Z" }).toBeInvalid("tests.harness.cases.TimestampLTNowWithin", 1);
});

it("gt now within - valid", () => {
  expect({ val: "2022-10-29T08:32:47Z" }).toBeValid("tests.harness.cases.TimestampGTNowWithin");
});

it("gt now within - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.TimestampGTNowWithin");
});

it("gt now within - invalid (gt)", () => {
  expect({ val: "2022-10-29T07:32:47Z" }).toBeInvalid("tests.harness.cases.TimestampGTNowWithin", 1);
});

it("gt now within - invalid (within)", () => {
  expect({ val: "2022-10-29T10:02:47Z" }).toBeInvalid("tests.harness.cases.TimestampGTNowWithin", 1);
});
