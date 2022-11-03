// @generated by protoc-gen-validate-zod-test v0.0.2-dev with parameter "target=ts,cases=packages/protoc-gen-validate-zod/tests/cases.txt"
// @generated from file tests/harness/cases/enums.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {expect, it} from "vitest";
import {EnumAliasConst, EnumAliasDefined, EnumAliasIn, EnumAliasNotIn, EnumConst, EnumDefined, EnumExternal, EnumIn, EnumNone, EnumNotIn, MapEnumDefined, MapExternalEnumDefined, RepeatedEnumDefined, RepeatedExternalEnumDefined, RepeatedYetAnotherExternalEnumDefined} from "./enums_pb.js";
import {EnumAliasConstSchema, EnumAliasDefinedSchema, EnumAliasInSchema, EnumAliasNotInSchema, EnumConstSchema, EnumDefinedSchema, EnumExternalSchema, EnumInSchema, EnumNoneSchema, EnumNotInSchema, MapEnumDefinedSchema, MapExternalEnumDefinedSchema, RepeatedEnumDefinedSchema, RepeatedExternalEnumDefinedSchema, RepeatedYetAnotherExternalEnumDefinedSchema} from "./enums_zod.js";

it("enum - none - valid", () => {
  const message = EnumNone.fromJson({"val":"ONE"});
  expect(message).toBeValid(EnumNoneSchema);
});

it("enum - const - valid", () => {
  const message = EnumConst.fromJson({"val":"TWO"});
  expect(message).toBeValid(EnumConstSchema);
});

it("enum - const - invalid", () => {
  const message = EnumConst.fromJson({"val":"ONE"});
  expect(message).toBeInvalid(EnumConstSchema, 1);
});

it("enum alias - const - valid", () => {
  const message = EnumAliasConst.fromJson({"val":"C"});
  expect(message).toBeValid(EnumAliasConstSchema);
});

it("enum alias - const - valid (alias)", () => {
  const message = EnumAliasConst.fromJson({"val":"C"});
  expect(message).toBeValid(EnumAliasConstSchema);
});

it("enum alias - const - invalid", () => {
  const message = EnumAliasConst.fromJson({});
  expect(message).toBeInvalid(EnumAliasConstSchema, 1);
});

it("enum - defined_only - valid", () => {
  const message = EnumDefined.fromJson({});
  expect(message).toBeValid(EnumDefinedSchema);
});

it("enum - defined_only - invalid", () => {
  const message = EnumDefined.fromJson({"val":2147483647});
  expect(message).toBeInvalid(EnumDefinedSchema, 1);
});

it("enum alias - defined_only - valid", () => {
  const message = EnumAliasDefined.fromJson({"val":"B"});
  expect(message).toBeValid(EnumAliasDefinedSchema);
});

it("enum alias - defined_only - invalid", () => {
  const message = EnumAliasDefined.fromJson({"val":2147483647});
  expect(message).toBeInvalid(EnumAliasDefinedSchema, 1);
});

it("enum - in - valid", () => {
  const message = EnumIn.fromJson({"val":"TWO"});
  expect(message).toBeValid(EnumInSchema);
});

it("enum - in - invalid", () => {
  const message = EnumIn.fromJson({"val":"ONE"});
  expect(message).toBeInvalid(EnumInSchema, 1);
});

it("enum alias - in - valid", () => {
  const message = EnumAliasIn.fromJson({});
  expect(message).toBeValid(EnumAliasInSchema);
});

it("enum alias - in - valid (alias)", () => {
  const message = EnumAliasIn.fromJson({});
  expect(message).toBeValid(EnumAliasInSchema);
});

it("enum alias - in - invalid", () => {
  const message = EnumAliasIn.fromJson({"val":"B"});
  expect(message).toBeInvalid(EnumAliasInSchema, 1);
});

it("enum - not in - valid", () => {
  const message = EnumNotIn.fromJson({});
  expect(message).toBeValid(EnumNotInSchema);
});

it("enum - not in - valid (undefined)", () => {
  const message = EnumNotIn.fromJson({"val":2147483647});
  expect(message).toBeValid(EnumNotInSchema);
});

it("enum - not in - invalid", () => {
  const message = EnumNotIn.fromJson({"val":"ONE"});
  expect(message).toBeInvalid(EnumNotInSchema, 1);
});

it("enum alias - not in - valid", () => {
  const message = EnumAliasNotIn.fromJson({});
  expect(message).toBeValid(EnumAliasNotInSchema);
});

it("enum alias - not in - invalid", () => {
  const message = EnumAliasNotIn.fromJson({"val":"B"});
  expect(message).toBeInvalid(EnumAliasNotInSchema, 1);
});

it("enum alias - not in - invalid (alias)", () => {
  const message = EnumAliasNotIn.fromJson({"val":"B"});
  expect(message).toBeInvalid(EnumAliasNotInSchema, 1);
});

it("enum external - defined_only - valid", () => {
  const message = EnumExternal.fromJson({});
  expect(message).toBeValid(EnumExternalSchema);
});

it("enum external - defined_only - invalid", () => {
  const message = EnumExternal.fromJson({"val":2147483647});
  expect(message).toBeInvalid(EnumExternalSchema, 1);
});

it("enum repeated - defined_only - valid", () => {
  const message = RepeatedEnumDefined.fromJson({"val":["ONE","TWO"]});
  expect(message).toBeValid(RepeatedEnumDefinedSchema);
});

it("enum repeated - defined_only - invalid", () => {
  const message = RepeatedEnumDefined.fromJson({"val":["ONE",2147483647]});
  expect(message).toBeInvalid(RepeatedEnumDefinedSchema, 1);
});

it("enum repeated (external) - defined_only - valid", () => {
  const message = RepeatedExternalEnumDefined.fromJson({"val":["VALUE"]});
  expect(message).toBeValid(RepeatedExternalEnumDefinedSchema);
});

it("enum repeated (external) - defined_only - invalid", () => {
  const message = RepeatedExternalEnumDefined.fromJson({"val":[2147483647]});
  expect(message).toBeInvalid(RepeatedExternalEnumDefinedSchema, 1);
});

it("enum repeated (another external) - defined_only - valid", () => {
  const message = RepeatedYetAnotherExternalEnumDefined.fromJson({"val":["VALUE"]});
  expect(message).toBeValid(RepeatedYetAnotherExternalEnumDefinedSchema);
});

it("enum map - defined_only - valid", () => {
  const message = MapEnumDefined.fromJson({"val":{"foo":"TWO"}});
  expect(message).toBeValid(MapEnumDefinedSchema);
});

it("enum map - defined_only - invalid", () => {
  const message = MapEnumDefined.fromJson({"val":{"foo":2147483647}});
  expect(message).toBeInvalid(MapEnumDefinedSchema, 1);
});

it("enum map (external) - defined_only - valid", () => {
  const message = MapExternalEnumDefined.fromJson({"val":{"foo":"VALUE"}});
  expect(message).toBeValid(MapExternalEnumDefinedSchema);
});

it("enum map (external) - defined_only - invalid", () => {
  const message = MapExternalEnumDefined.fromJson({"val":{"foo":2147483647}});
  expect(message).toBeInvalid(MapExternalEnumDefinedSchema, 1);
});
