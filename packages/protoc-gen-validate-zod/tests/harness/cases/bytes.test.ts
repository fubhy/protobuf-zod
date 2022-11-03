// @generated by protoc-gen-validate-zod-test v0.0.1-dev with parameter "target=ts,cases=packages/protoc-gen-validate-zod/tests/cases.txt"
// @generated from file tests/harness/cases/bytes.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {expect, it} from "vitest";
import {BytesConst, BytesContains, BytesEqualMinMaxLen, BytesIn, BytesIP, BytesIPv4, BytesIPv6, BytesIPv6Ignore, BytesLen, BytesMaxLen, BytesMinLen, BytesMinMaxLen, BytesNone, BytesNotIn, BytesPattern, BytesPrefix, BytesSuffix} from "./bytes_pb.js";
import {BytesConstSchema, BytesContainsSchema, BytesEqualMinMaxLenSchema, BytesInSchema, BytesIPSchema, BytesIPv4Schema, BytesIPv6IgnoreSchema, BytesIPv6Schema, BytesLenSchema, BytesMaxLenSchema, BytesMinLenSchema, BytesMinMaxLenSchema, BytesNoneSchema, BytesNotInSchema, BytesPatternSchema, BytesPrefixSchema, BytesSuffixSchema} from "./bytes_zod.js";

it("bytes - none - valid", () => {
  const message = BytesNone.fromJson({"val":"cXV1eA=="});
  expect(message).toBeValid(BytesNoneSchema);
});

it("bytes - const - valid", () => {
  const message = BytesConst.fromJson({"val":"Zm9v"});
  expect(message).toBeValid(BytesConstSchema);
});

it("bytes - const - invalid", () => {
  const message = BytesConst.fromJson({"val":"YmFy"});
  expect(message).toBeInvalid(BytesConstSchema, 1);
});

it("bytes - in - valid", () => {
  const message = BytesIn.fromJson({"val":"YmFy"});
  expect(message).toBeValid(BytesInSchema);
});

it("bytes - in - invalid", () => {
  const message = BytesIn.fromJson({"val":"cXV1eA=="});
  expect(message).toBeInvalid(BytesInSchema, 1);
});

it("bytes - not in - valid", () => {
  const message = BytesNotIn.fromJson({"val":"cXV1eA=="});
  expect(message).toBeValid(BytesNotInSchema);
});

it("bytes - not in - invalid", () => {
  const message = BytesNotIn.fromJson({"val":"Zml6eg=="});
  expect(message).toBeInvalid(BytesNotInSchema, 1);
});

it("bytes - len - valid", () => {
  const message = BytesLen.fromJson({"val":"YmF6"});
  expect(message).toBeValid(BytesLenSchema);
});

it("bytes - len - invalid (lt)", () => {
  const message = BytesLen.fromJson({"val":"Z28="});
  expect(message).toBeInvalid(BytesLenSchema, 1);
});

it("bytes - len - invalid (gt)", () => {
  const message = BytesLen.fromJson({"val":"Zml6eg=="});
  expect(message).toBeInvalid(BytesLenSchema, 1);
});

it("bytes - min len - valid", () => {
  const message = BytesMinLen.fromJson({"val":"Zml6eg=="});
  expect(message).toBeValid(BytesMinLenSchema);
});

it("bytes - min len - valid (min)", () => {
  const message = BytesMinLen.fromJson({"val":"YmF6"});
  expect(message).toBeValid(BytesMinLenSchema);
});

it("bytes - min len - invalid", () => {
  const message = BytesMinLen.fromJson({"val":"Z28="});
  expect(message).toBeInvalid(BytesMinLenSchema, 1);
});

it("bytes - max len - valid", () => {
  const message = BytesMaxLen.fromJson({"val":"Zm9v"});
  expect(message).toBeValid(BytesMaxLenSchema);
});

it("bytes - max len - valid (max)", () => {
  const message = BytesMaxLen.fromJson({"val":"cHJvdG8="});
  expect(message).toBeValid(BytesMaxLenSchema);
});

it("bytes - max len - invalid", () => {
  const message = BytesMaxLen.fromJson({"val":"MTIzNDU2Nzg5MA=="});
  expect(message).toBeInvalid(BytesMaxLenSchema, 1);
});

it("bytes - min/max len - valid", () => {
  const message = BytesMinMaxLen.fromJson({"val":"cXV1eA=="});
  expect(message).toBeValid(BytesMinMaxLenSchema);
});

it("bytes - min/max len - valid (min)", () => {
  const message = BytesMinMaxLen.fromJson({"val":"Zm9v"});
  expect(message).toBeValid(BytesMinMaxLenSchema);
});

it("bytes - min/max len - valid (max)", () => {
  const message = BytesMinMaxLen.fromJson({"val":"cHJvdG8="});
  expect(message).toBeValid(BytesMinMaxLenSchema);
});

it("bytes - min/max len - invalid (below)", () => {
  const message = BytesMinMaxLen.fromJson({"val":"Z28="});
  expect(message).toBeInvalid(BytesMinMaxLenSchema, 1);
});

it("bytes - min/max len - invalid (above)", () => {
  const message = BytesMinMaxLen.fromJson({"val":"dmFsaWRhdGU="});
  expect(message).toBeInvalid(BytesMinMaxLenSchema, 1);
});

it("bytes - equal min/max len - valid", () => {
  const message = BytesEqualMinMaxLen.fromJson({"val":"cHJvdG8="});
  expect(message).toBeValid(BytesEqualMinMaxLenSchema);
});

it("bytes - equal min/max len - invalid", () => {
  const message = BytesEqualMinMaxLen.fromJson({"val":"dmFsaWRhdGU="});
  expect(message).toBeInvalid(BytesEqualMinMaxLenSchema, 1);
});

it("bytes - pattern - valid", () => {
  const message = BytesPattern.fromJson({"val":"Rm9vMTIz"});
  expect(message).toBeValid(BytesPatternSchema);
});

it("bytes - pattern - invalid", () => {
  const message = BytesPattern.fromJson({"val":"5L2g5aW95L2g5aW9"});
  expect(message).toBeInvalid(BytesPatternSchema, 1);
});

it("bytes - pattern - invalid (empty)", () => {
  const message = BytesPattern.fromJson({});
  expect(message).toBeInvalid(BytesPatternSchema, 1);
});

it("bytes - prefix - valid", () => {
  const message = BytesPrefix.fromJson({"val":"mZ8I"});
  expect(message).toBeValid(BytesPrefixSchema);
});

it("bytes - prefix - valid (only)", () => {
  const message = BytesPrefix.fromJson({"val":"mQ=="});
  expect(message).toBeValid(BytesPrefixSchema);
});

it("bytes - prefix - invalid", () => {
  const message = BytesPrefix.fromJson({"val":"YmFy"});
  expect(message).toBeInvalid(BytesPrefixSchema, 1);
});

it("bytes - contains - valid", () => {
  const message = BytesContains.fromJson({"val":"Y2FuZHkgYmFycw=="});
  expect(message).toBeValid(BytesContainsSchema);
});

it("bytes - contains - valid (only)", () => {
  const message = BytesContains.fromJson({"val":"YmFy"});
  expect(message).toBeValid(BytesContainsSchema);
});

it("bytes - contains - invalid", () => {
  const message = BytesContains.fromJson({"val":"Y2FuZHkgYmF6cw=="});
  expect(message).toBeInvalid(BytesContainsSchema, 1);
});

it("bytes - suffix - valid", () => {
  const message = BytesSuffix.fromJson({"val":"YnV6eg=="});
  expect(message).toBeValid(BytesSuffixSchema);
});

it("bytes - suffix - valid (only)", () => {
  const message = BytesSuffix.fromJson({"val":"YnV6eg=="});
  expect(message).toBeValid(BytesSuffixSchema);
});

it("bytes - suffix - invalid", () => {
  const message = BytesSuffix.fromJson({"val":"Zm9vYmFy"});
  expect(message).toBeInvalid(BytesSuffixSchema, 1);
});

it("bytes - suffix - invalid (case-sensitive)", () => {
  const message = BytesSuffix.fromJson({"val":"Rm9vQmF6"});
  expect(message).toBeInvalid(BytesSuffixSchema, 1);
});

it("bytes - IP - valid (v4)", () => {
  const message = BytesIP.fromJson({"val":"wKgAAQ=="});
  expect(message).toBeValid(BytesIPSchema);
});

it("bytes - IP - valid (v6)", () => {
  const message = BytesIP.fromJson({"val":"IAENuIWjAAAAAIouA3BzNA=="});
  expect(message).toBeValid(BytesIPSchema);
});

it("bytes - IP - invalid", () => {
  const message = BytesIP.fromJson({"val":"Zm9vYmFy"});
  expect(message).toBeInvalid(BytesIPSchema, 1);
});

it("bytes - IPv4 - valid", () => {
  const message = BytesIPv4.fromJson({"val":"wKgAAQ=="});
  expect(message).toBeValid(BytesIPv4Schema);
});

it("bytes - IPv4 - invalid", () => {
  const message = BytesIPv4.fromJson({"val":"Zm9vYmFy"});
  expect(message).toBeInvalid(BytesIPv4Schema, 1);
});

it("bytes - IPv4 - invalid (v6)", () => {
  const message = BytesIPv4.fromJson({"val":"IAENuIWjAAAAAIouA3BzNA=="});
  expect(message).toBeInvalid(BytesIPv4Schema, 1);
});

it("bytes - IPv6 - valid", () => {
  const message = BytesIPv6.fromJson({"val":"IAENuIWjAAAAAIouA3BzNA=="});
  expect(message).toBeValid(BytesIPv6Schema);
});

it("bytes - IPv6 - invalid", () => {
  const message = BytesIPv6.fromJson({"val":"Zm9vYXI="});
  expect(message).toBeInvalid(BytesIPv6Schema, 1);
});

it("bytes - IPv6 - invalid (v4)", () => {
  const message = BytesIPv6.fromJson({"val":"wKgAAQ=="});
  expect(message).toBeInvalid(BytesIPv6Schema, 1);
});

it("bytes - IPv6 - valid (ignore_empty)", () => {
  const message = BytesIPv6Ignore.fromJson({});
  expect(message).toBeValid(BytesIPv6IgnoreSchema);
});
