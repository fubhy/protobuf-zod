// @generated by protoc-gen-validate-zod-test v0.0.2-dev with parameter "target=ts,cases=packages/protoc-gen-validate-zod/tests/cases.txt,descriptor=vendor/cases.bin"
// @generated from file tests/harness/cases/wkt_any.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {expect, it} from "vitest";
import {AnyIn, AnyNone, AnyNotIn, AnyRequired} from "./wkt_any_pb.js";
import {AnyInSchema, AnyNoneSchema, AnyNotInSchema, AnyRequiredSchema} from "./wkt_any_zod.js";
import {createRegistry, Duration, Timestamp} from "@bufbuild/protobuf";

it("any - none - valid", () => {
  const message = AnyNone.fromJson({"val":{}});
  expect(message).toBeValid(AnyNoneSchema);
});

it("any - required - valid", () => {
  const message = AnyRequired.fromJson({"val":{}});
  expect(message).toBeValid(AnyRequiredSchema);
});

it("any - required - invalid", () => {
  const message = AnyRequired.fromJson({});
  expect(message).toBeInvalid(AnyRequiredSchema, 1);
});

it("any - in - valid", () => {
  const registry = createRegistry(Duration);
  const message = AnyIn.fromJson({"val":{"value":"0s","@type":"type.googleapis.com/google.protobuf.Duration"}}, { typeRegistry: registry });
  expect(message).toBeValid(AnyInSchema);
});

it("any - in - valid (empty)", () => {
  const message = AnyIn.fromJson({});
  expect(message).toBeValid(AnyInSchema);
});

it("any - in - invalid", () => {
  const registry = createRegistry(Timestamp);
  const message = AnyIn.fromJson({"val":{"value":"1970-01-01T00:00:00Z","@type":"type.googleapis.com/google.protobuf.Timestamp"}}, { typeRegistry: registry });
  expect(message).toBeInvalid(AnyInSchema, 1);
});

it("any - not in - valid", () => {
  const registry = createRegistry(Duration);
  const message = AnyNotIn.fromJson({"val":{"value":"0s","@type":"type.googleapis.com/google.protobuf.Duration"}}, { typeRegistry: registry });
  expect(message).toBeValid(AnyNotInSchema);
});

it("any - not in - valid (empty)", () => {
  const message = AnyNotIn.fromJson({});
  expect(message).toBeValid(AnyNotInSchema);
});

it("any - not in - invalid", () => {
  const registry = createRegistry(Timestamp);
  const message = AnyNotIn.fromJson({"val":{"value":"1970-01-01T00:00:00Z","@type":"type.googleapis.com/google.protobuf.Timestamp"}}, { typeRegistry: registry });
  expect(message).toBeInvalid(AnyNotInSchema, 1);
});
