// @generated by protoc-gen-validate-zod-test v0.0.2-dev with parameter "target=ts,cases=packages/protoc-gen-validate-zod/tests/cases.txt"
// @generated from file tests/harness/cases/messages.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {expect, it} from "vitest";
import {Message, MessageCrossPackage, MessageDisabled, MessageIgnored, MessageNone, MessageRequired, MessageRequiredButOptional, MessageRequiredOneof, MessageSkip} from "./messages_pb.js";
import {MessageCrossPackageSchema, MessageDisabledSchema, MessageIgnoredSchema, MessageNoneSchema, MessageRequiredButOptionalSchema, MessageRequiredOneofSchema, MessageRequiredSchema, MessageSchema, MessageSkipSchema} from "./messages_zod.js";

it("message - none - valid", () => {
  const message = MessageNone.fromJson({"val":{}});
  expect(message).toBeValid(MessageNoneSchema);
});

it("message - none - valid (unset)", () => {
  const message = MessageNone.fromJson({});
  expect(message).toBeValid(MessageNoneSchema);
});

it("message - disabled - valid", () => {
  const message = MessageDisabled.fromJson({"val":"456"});
  expect(message).toBeValid(MessageDisabledSchema);
});

it("message - disabled - valid (invalid field)", () => {
  const message = MessageDisabled.fromJson({});
  expect(message).toBeValid(MessageDisabledSchema);
});

it("message - ignored - valid", () => {
  const message = MessageIgnored.fromJson({"val":"456"});
  expect(message).toBeValid(MessageIgnoredSchema);
});

it("message - ignored - valid (invalid field)", () => {
  const message = MessageIgnored.fromJson({});
  expect(message).toBeValid(MessageIgnoredSchema);
});

it("message - field - valid", () => {
  const message = Message.fromJson({"val":{"const":"foo"}});
  expect(message).toBeValid(MessageSchema);
});

it("message - field - valid (unset)", () => {
  const message = Message.fromJson({});
  expect(message).toBeValid(MessageSchema);
});

it("message - field - invalid", () => {
  const message = Message.fromJson({"val":{}});
  expect(message).toBeInvalid(MessageSchema, 1);
});

it("message - field - invalid (transitive)", () => {
  const message = Message.fromJson({"val":{"const":"foo","nested":{}}});
  expect(message).toBeInvalid(MessageSchema, 1);
});

it("message - skip - valid", () => {
  const message = MessageSkip.fromJson({"val":{}});
  expect(message).toBeValid(MessageSkipSchema);
});

it("message - required - valid", () => {
  const message = MessageRequired.fromJson({"val":{"const":"foo"}});
  expect(message).toBeValid(MessageRequiredSchema);
});

it("message - required - valid (oneof)", () => {
  const message = MessageRequiredOneof.fromJson({"val":{"const":"foo"}});
  expect(message).toBeValid(MessageRequiredOneofSchema);
});

it("message - required - invalid", () => {
  const message = MessageRequired.fromJson({});
  expect(message).toBeInvalid(MessageRequiredSchema, 1);
});

it("message - required - invalid (oneof)", () => {
  const message = MessageRequiredOneof.fromJson({});
  expect(message).toBeInvalid(MessageRequiredOneofSchema, 1);
});

it("message - cross-package embed none - valid", () => {
  const message = MessageCrossPackage.fromJson({"val":{"val":"1"}});
  expect(message).toBeValid(MessageCrossPackageSchema);
});

it("message - cross-package embed none - valid (nil)", () => {
  const message = MessageCrossPackage.fromJson({});
  expect(message).toBeValid(MessageCrossPackageSchema);
});

it("message - cross-package embed none - valid (empty)", () => {
  const message = MessageCrossPackage.fromJson({"val":{}});
  expect(message).toBeInvalid(MessageCrossPackageSchema, 1);
});

it("message - cross-package embed none - invalid", () => {
  const message = MessageCrossPackage.fromJson({"val":{"val":"-1"}});
  expect(message).toBeInvalid(MessageCrossPackageSchema, 1);
});

it("message - required - valid", () => {
  const message = MessageRequiredButOptional.fromJson({"val":{"const":"foo"}});
  expect(message).toBeValid(MessageRequiredButOptionalSchema);
});

it("message - required - valid (unset)", () => {
  const message = MessageRequiredButOptional.fromJson({});
  expect(message).toBeValid(MessageRequiredButOptionalSchema);
});
