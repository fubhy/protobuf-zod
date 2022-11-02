// @generated by protoc-gen-validate-zod-test v0.0.1-dev with parameter "target=ts,cases=tests/fixtures/cases.txt"
// @generated from file tests/harness/cases/wkt_duration.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import { expect, it } from "vitest";
import {
  DurationConst,
  DurationExGTELTE,
  DurationExLTGT,
  DurationFieldWithOtherFields,
  DurationGT,
  DurationGTE,
  DurationGTELTE,
  DurationGTLT,
  DurationIn,
  DurationLT,
  DurationLTE,
  DurationNone,
  DurationNotIn,
  DurationRequired,
} from "./wkt_duration_pb.js";
import {
  DurationConstSchema,
  DurationExGTELTESchema,
  DurationExLTGTSchema,
  DurationFieldWithOtherFieldsSchema,
  DurationGTELTESchema,
  DurationGTESchema,
  DurationGTLTSchema,
  DurationGTSchema,
  DurationInSchema,
  DurationLTESchema,
  DurationLTSchema,
  DurationNoneSchema,
  DurationNotInSchema,
  DurationRequiredSchema,
} from "./wkt_duration_zod.js";

it("duration - none - valid", () => {
  const message = DurationNone.fromJson({ val: "123s" });
  expect(message).toBeValid(DurationNoneSchema);
});

it("duration - required - valid", () => {
  const message = DurationRequired.fromJson({ val: "0s" });
  expect(message).toBeValid(DurationRequiredSchema);
});

it("duration - required - invalid", () => {
  const message = DurationRequired.fromJson({});
  expect(message).toBeInvalid(DurationRequiredSchema, 1);
});

it("duration - const - valid", () => {
  const message = DurationConst.fromJson({ val: "3s" });
  expect(message).toBeValid(DurationConstSchema);
});

it("duration - const - valid (empty)", () => {
  const message = DurationConst.fromJson({});
  expect(message).toBeValid(DurationConstSchema);
});

it("duration - const - invalid", () => {
  const message = DurationConst.fromJson({ val: "0.000000003s" });
  expect(message).toBeInvalid(DurationConstSchema, 1);
});

it("duration - in - valid", () => {
  const message = DurationIn.fromJson({ val: "1s" });
  expect(message).toBeValid(DurationInSchema);
});

it("duration - in - valid (empty)", () => {
  const message = DurationIn.fromJson({});
  expect(message).toBeValid(DurationInSchema);
});

it("duration - in - invalid", () => {
  const message = DurationIn.fromJson({ val: "0s" });
  expect(message).toBeInvalid(DurationInSchema, 1);
});

it("duration - not in - valid", () => {
  const message = DurationNotIn.fromJson({ val: "0.000000001s" });
  expect(message).toBeValid(DurationNotInSchema);
});

it("duration - not in - valid (empty)", () => {
  const message = DurationNotIn.fromJson({});
  expect(message).toBeValid(DurationNotInSchema);
});

it("duration - not in - invalid", () => {
  const message = DurationNotIn.fromJson({ val: "0s" });
  expect(message).toBeInvalid(DurationNotInSchema, 1);
});

it("duration - lt - valid", () => {
  const message = DurationLT.fromJson({ val: "-0.000000001s" });
  expect(message).toBeValid(DurationLTSchema);
});

it("duration - lt - valid (empty)", () => {
  const message = DurationLT.fromJson({});
  expect(message).toBeValid(DurationLTSchema);
});

it("duration - lt - invalid (equal)", () => {
  const message = DurationLT.fromJson({ val: "0s" });
  expect(message).toBeInvalid(DurationLTSchema, 1);
});

it("duration - lt - invalid", () => {
  const message = DurationLT.fromJson({ val: "1s" });
  expect(message).toBeInvalid(DurationLTSchema, 1);
});

it("duration - lte - valid", () => {
  const message = DurationLTE.fromJson({ val: "0s" });
  expect(message).toBeValid(DurationLTESchema);
});

it("duration - lte - valid (empty)", () => {
  const message = DurationLTE.fromJson({});
  expect(message).toBeValid(DurationLTESchema);
});

it("duration - lte - valid (equal)", () => {
  const message = DurationLTE.fromJson({ val: "1s" });
  expect(message).toBeValid(DurationLTESchema);
});

it("duration - lte - invalid", () => {
  const message = DurationLTE.fromJson({ val: "1.000000001s" });
  expect(message).toBeInvalid(DurationLTESchema, 1);
});

it("duration - gt - valid", () => {
  const message = DurationGT.fromJson({ val: "1s" });
  expect(message).toBeValid(DurationGTSchema);
});

it("duration - gt - valid (empty)", () => {
  const message = DurationGT.fromJson({});
  expect(message).toBeValid(DurationGTSchema);
});

it("duration - gt - invalid (equal)", () => {
  const message = DurationGT.fromJson({ val: "0.000001s" });
  expect(message).toBeInvalid(DurationGTSchema, 1);
});

it("duration - gt - invalid", () => {
  const message = DurationGT.fromJson({ val: "0s" });
  expect(message).toBeInvalid(DurationGTSchema, 1);
});

it("duration - gte - valid", () => {
  const message = DurationGTE.fromJson({ val: "3s" });
  expect(message).toBeValid(DurationGTESchema);
});

it("duration - gte - valid (empty)", () => {
  const message = DurationGTE.fromJson({});
  expect(message).toBeValid(DurationGTESchema);
});

it("duration - gte - valid (equal)", () => {
  const message = DurationGTE.fromJson({ val: "0.001s" });
  expect(message).toBeValid(DurationGTESchema);
});

it("duration - gte - invalid", () => {
  const message = DurationGTE.fromJson({ val: "-1s" });
  expect(message).toBeInvalid(DurationGTESchema, 1);
});

it("duration - gt & lt - valid", () => {
  const message = DurationGTLT.fromJson({ val: "0.000001s" });
  expect(message).toBeValid(DurationGTLTSchema);
});

it("duration - gt & lt - valid (empty)", () => {
  const message = DurationGTLT.fromJson({});
  expect(message).toBeValid(DurationGTLTSchema);
});

it("duration - gt & lt - invalid (above)", () => {
  const message = DurationGTLT.fromJson({ val: "1000s" });
  expect(message).toBeInvalid(DurationGTLTSchema, 1);
});

it("duration - gt & lt - invalid (below)", () => {
  const message = DurationGTLT.fromJson({ val: "-0.000001s" });
  expect(message).toBeInvalid(DurationGTLTSchema, 1);
});

it("duration - gt & lt - invalid (max)", () => {
  const message = DurationGTLT.fromJson({ val: "1s" });
  expect(message).toBeInvalid(DurationGTLTSchema, 1);
});

it("duration - gt & lt - invalid (min)", () => {
  const message = DurationGTLT.fromJson({ val: "0s" });
  expect(message).toBeInvalid(DurationGTLTSchema, 1);
});

it("duration - exclusive gt & lt - valid (empty)", () => {
  const message = DurationExLTGT.fromJson({});
  expect(message).toBeValid(DurationExLTGTSchema);
});

it("duration - exclusive gt & lt - valid (above)", () => {
  const message = DurationExLTGT.fromJson({ val: "2s" });
  expect(message).toBeValid(DurationExLTGTSchema);
});

it("duration - exclusive gt & lt - valid (below)", () => {
  const message = DurationExLTGT.fromJson({ val: "-0.000000001s" });
  expect(message).toBeValid(DurationExLTGTSchema);
});

it("duration - exclusive gt & lt - invalid", () => {
  const message = DurationExLTGT.fromJson({ val: "0.000001s" });
  expect(message).toBeInvalid(DurationExLTGTSchema, 1);
});

it("duration - exclusive gt & lt - invalid (max)", () => {
  const message = DurationExLTGT.fromJson({ val: "1s" });
  expect(message).toBeInvalid(DurationExLTGTSchema, 1);
});

it("duration - exclusive gt & lt - invalid (min)", () => {
  const message = DurationExLTGT.fromJson({ val: "0s" });
  expect(message).toBeInvalid(DurationExLTGTSchema, 1);
});

it("duration - gte & lte - valid", () => {
  const message = DurationGTELTE.fromJson({ val: "60.000000001s" });
  expect(message).toBeValid(DurationGTELTESchema);
});

it("duration - gte & lte - valid (empty)", () => {
  const message = DurationGTELTE.fromJson({});
  expect(message).toBeValid(DurationGTELTESchema);
});

it("duration - gte & lte - valid (max)", () => {
  const message = DurationGTELTE.fromJson({ val: "3600s" });
  expect(message).toBeValid(DurationGTELTESchema);
});

it("duration - gte & lte - valid (min)", () => {
  const message = DurationGTELTE.fromJson({ val: "60s" });
  expect(message).toBeValid(DurationGTELTESchema);
});

it("duration - gte & lte - invalid (above)", () => {
  const message = DurationGTELTE.fromJson({ val: "3600.000000001s" });
  expect(message).toBeInvalid(DurationGTELTESchema, 1);
});

it("duration - gte & lte - invalid (below)", () => {
  const message = DurationGTELTE.fromJson({ val: "59s" });
  expect(message).toBeInvalid(DurationGTELTESchema, 1);
});

it("duration - gte & lte - valid (empty)", () => {
  const message = DurationExGTELTE.fromJson({});
  expect(message).toBeValid(DurationExGTELTESchema);
});

it("duration - exclusive gte & lte - valid (above)", () => {
  const message = DurationExGTELTE.fromJson({ val: "3601s" });
  expect(message).toBeValid(DurationExGTELTESchema);
});

it("duration - exclusive gte & lte - valid (below)", () => {
  const message = DurationExGTELTE.fromJson({ val: "0s" });
  expect(message).toBeValid(DurationExGTELTESchema);
});

it("duration - exclusive gte & lte - valid (max)", () => {
  const message = DurationExGTELTE.fromJson({ val: "3600s" });
  expect(message).toBeValid(DurationExGTELTESchema);
});

it("duration - exclusive gte & lte - valid (min)", () => {
  const message = DurationExGTELTE.fromJson({ val: "60s" });
  expect(message).toBeValid(DurationExGTELTESchema);
});

it("duration - exclusive gte & lte - invalid", () => {
  const message = DurationExGTELTE.fromJson({ val: "61s" });
  expect(message).toBeInvalid(DurationExGTELTESchema, 1);
});

it("duration - fields with other fields - invalid other field", () => {
  const message = DurationFieldWithOtherFields.fromJson({ intVal: 12 });
  expect(message).toBeInvalid(DurationFieldWithOtherFieldsSchema, 1);
});
