// @generated by protoc-gen-validate-zod-test v0.0.2-dev with parameter "target=ts,cases=packages/protoc-gen-validate-zod/tests/cases.txt,descriptor=vendor/cases.bin"
// @generated from file tests/harness/cases/strings.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {expect, it} from "vitest";
import {StringAddress, StringConst, StringContains, StringEmail, StringEqualMinMaxBytes, StringEqualMinMaxLen, StringHostname, StringHttpHeaderName, StringHttpHeaderValue, StringIn, StringIP, StringIPv4, StringIPv6, StringLen, StringLenBytes, StringMaxBytes, StringMaxLen, StringMinBytes, StringMinLen, StringMinMaxBytes, StringMinMaxLen, StringNone, StringNotContains, StringNotIn, StringPattern, StringPatternEscapes, StringPrefix, StringSuffix, StringURI, StringURIRef, StringUUID, StringUUIDIgnore, StringValidHeader} from "./strings_pb.js";
import {StringAddressSchema, StringConstSchema, StringContainsSchema, StringEmailSchema, StringEqualMinMaxBytesSchema, StringEqualMinMaxLenSchema, StringHostnameSchema, StringHttpHeaderNameSchema, StringHttpHeaderValueSchema, StringInSchema, StringIPSchema, StringIPv4Schema, StringIPv6Schema, StringLenBytesSchema, StringLenSchema, StringMaxBytesSchema, StringMaxLenSchema, StringMinBytesSchema, StringMinLenSchema, StringMinMaxBytesSchema, StringMinMaxLenSchema, StringNoneSchema, StringNotContainsSchema, StringNotInSchema, StringPatternEscapesSchema, StringPatternSchema, StringPrefixSchema, StringSuffixSchema, StringURIRefSchema, StringURISchema, StringUUIDIgnoreSchema, StringUUIDSchema, StringValidHeaderSchema} from "./strings_zod.js";

it("string - none - valid", () => {
  const message = StringNone.fromJson({"val":"quux"});
  expect(message).toBeValid(StringNoneSchema);
});

it("string - const - valid", () => {
  const message = StringConst.fromJson({"val":"foo"});
  expect(message).toBeValid(StringConstSchema);
});

it("string - const - invalid", () => {
  const message = StringConst.fromJson({"val":"bar"});
  expect(message).toBeInvalid(StringConstSchema, 1);
});

it("string - in - valid", () => {
  const message = StringIn.fromJson({"val":"bar"});
  expect(message).toBeValid(StringInSchema);
});

it("string - in - invalid", () => {
  const message = StringIn.fromJson({"val":"quux"});
  expect(message).toBeInvalid(StringInSchema, 1);
});

it("string - not in - valid", () => {
  const message = StringNotIn.fromJson({"val":"quux"});
  expect(message).toBeValid(StringNotInSchema);
});

it("string - not in - invalid", () => {
  const message = StringNotIn.fromJson({"val":"fizz"});
  expect(message).toBeInvalid(StringNotInSchema, 1);
});

it("string - len - valid", () => {
  const message = StringLen.fromJson({"val":"baz"});
  expect(message).toBeValid(StringLenSchema);
});

it("string - len - valid (multibyte)", () => {
  const message = StringLen.fromJson({"val":"?????????"});
  expect(message).toBeValid(StringLenSchema);
});

it("string - len - invalid (lt)", () => {
  const message = StringLen.fromJson({"val":"go"});
  expect(message).toBeInvalid(StringLenSchema, 1);
});

it("string - len - invalid (gt)", () => {
  const message = StringLen.fromJson({"val":"fizz"});
  expect(message).toBeInvalid(StringLenSchema, 1);
});

it("string - len - invalid (multibyte)", () => {
  const message = StringLen.fromJson({"val":"??????"});
  expect(message).toBeInvalid(StringLenSchema, 1);
});

it("string - min len - valid", () => {
  const message = StringMinLen.fromJson({"val":"protoc"});
  expect(message).toBeValid(StringMinLenSchema);
});

it("string - min len - valid (min)", () => {
  const message = StringMinLen.fromJson({"val":"baz"});
  expect(message).toBeValid(StringMinLenSchema);
});

it("string - min len - invalid", () => {
  const message = StringMinLen.fromJson({"val":"go"});
  expect(message).toBeInvalid(StringMinLenSchema, 1);
});

it("string - min len - invalid (multibyte)", () => {
  const message = StringMinLen.fromJson({"val":"??????"});
  expect(message).toBeInvalid(StringMinLenSchema, 1);
});

it("string - max len - valid", () => {
  const message = StringMaxLen.fromJson({"val":"foo"});
  expect(message).toBeValid(StringMaxLenSchema);
});

it("string - max len - valid (max)", () => {
  const message = StringMaxLen.fromJson({"val":"proto"});
  expect(message).toBeValid(StringMaxLenSchema);
});

it("string - max len - valid (multibyte)", () => {
  const message = StringMaxLen.fromJson({"val":"????????????"});
  expect(message).toBeValid(StringMaxLenSchema);
});

it("string - max len - invalid", () => {
  const message = StringMaxLen.fromJson({"val":"1234567890"});
  expect(message).toBeInvalid(StringMaxLenSchema, 1);
});

it("string - min/max len - valid", () => {
  const message = StringMinMaxLen.fromJson({"val":"quux"});
  expect(message).toBeValid(StringMinMaxLenSchema);
});

it("string - min/max len - valid (min)", () => {
  const message = StringMinMaxLen.fromJson({"val":"foo"});
  expect(message).toBeValid(StringMinMaxLenSchema);
});

it("string - min/max len - valid (max)", () => {
  const message = StringMinMaxLen.fromJson({"val":"proto"});
  expect(message).toBeValid(StringMinMaxLenSchema);
});

it("string - min/max len - valid (multibyte)", () => {
  const message = StringMinMaxLen.fromJson({"val":"????????????"});
  expect(message).toBeValid(StringMinMaxLenSchema);
});

it("string - min/max len - invalid (below)", () => {
  const message = StringMinMaxLen.fromJson({"val":"go"});
  expect(message).toBeInvalid(StringMinMaxLenSchema, 1);
});

it("string - min/max len - invalid (above)", () => {
  const message = StringMinMaxLen.fromJson({"val":"validate"});
  expect(message).toBeInvalid(StringMinMaxLenSchema, 1);
});

it("string - equal min/max len - valid", () => {
  const message = StringEqualMinMaxLen.fromJson({"val":"proto"});
  expect(message).toBeValid(StringEqualMinMaxLenSchema);
});

it("string - equal min/max len - invalid", () => {
  const message = StringEqualMinMaxLen.fromJson({"val":"validate"});
  expect(message).toBeInvalid(StringEqualMinMaxLenSchema, 1);
});

it("string - len bytes - valid", () => {
  const message = StringLenBytes.fromJson({"val":"pace"});
  expect(message).toBeValid(StringLenBytesSchema);
});

it("string - len bytes - invalid (lt)", () => {
  const message = StringLenBytes.fromJson({"val":"val"});
  expect(message).toBeInvalid(StringLenBytesSchema, 1);
});

it("string - len bytes - invalid (gt)", () => {
  const message = StringLenBytes.fromJson({"val":"world"});
  expect(message).toBeInvalid(StringLenBytesSchema, 1);
});

it("string - len bytes - invalid (multibyte)", () => {
  const message = StringLenBytes.fromJson({"val":"????????????"});
  expect(message).toBeInvalid(StringLenBytesSchema, 1);
});

it("string - min bytes - valid", () => {
  const message = StringMinBytes.fromJson({"val":"proto"});
  expect(message).toBeValid(StringMinBytesSchema);
});

it("string - min bytes - valid (min)", () => {
  const message = StringMinBytes.fromJson({"val":"quux"});
  expect(message).toBeValid(StringMinBytesSchema);
});

it("string - min bytes - valid (multibyte)", () => {
  const message = StringMinBytes.fromJson({"val":"??????"});
  expect(message).toBeValid(StringMinBytesSchema);
});

it("string - min bytes - invalid", () => {
  const message = StringMinBytes.fromJson({});
  expect(message).toBeInvalid(StringMinBytesSchema, 1);
});

it("string - max bytes - valid", () => {
  const message = StringMaxBytes.fromJson({"val":"foo"});
  expect(message).toBeValid(StringMaxBytesSchema);
});

it("string - max bytes - valid (max)", () => {
  const message = StringMaxBytes.fromJson({"val":"12345678"});
  expect(message).toBeValid(StringMaxBytesSchema);
});

it("string - max bytes - invalid", () => {
  const message = StringMaxBytes.fromJson({"val":"123456789"});
  expect(message).toBeInvalid(StringMaxBytesSchema, 1);
});

it("string - max bytes - invalid (multibyte)", () => {
  const message = StringMaxBytes.fromJson({"val":"??????????????????"});
  expect(message).toBeInvalid(StringMaxBytesSchema, 1);
});

it("string - min/max bytes - valid", () => {
  const message = StringMinMaxBytes.fromJson({"val":"protoc"});
  expect(message).toBeValid(StringMinMaxBytesSchema);
});

it("string - min/max bytes - valid (min)", () => {
  const message = StringMinMaxBytes.fromJson({"val":"quux"});
  expect(message).toBeValid(StringMinMaxBytesSchema);
});

it("string - min/max bytes - valid (max)", () => {
  const message = StringMinMaxBytes.fromJson({"val":"fizzbuzz"});
  expect(message).toBeValid(StringMinMaxBytesSchema);
});

it("string - min/max bytes - valid (multibyte)", () => {
  const message = StringMinMaxBytes.fromJson({"val":"??????"});
  expect(message).toBeValid(StringMinMaxBytesSchema);
});

it("string - min/max bytes - invalid (below)", () => {
  const message = StringMinMaxBytes.fromJson({"val":"foo"});
  expect(message).toBeInvalid(StringMinMaxBytesSchema, 1);
});

it("string - min/max bytes - invalid (above)", () => {
  const message = StringMinMaxBytes.fromJson({"val":"???????????????"});
  expect(message).toBeInvalid(StringMinMaxBytesSchema, 1);
});

it("string - equal min/max bytes - valid", () => {
  const message = StringEqualMinMaxBytes.fromJson({"val":"protoc"});
  expect(message).toBeValid(StringEqualMinMaxBytesSchema);
});

it("string - equal min/max bytes - invalid", () => {
  const message = StringEqualMinMaxBytes.fromJson({"val":"foo"});
  expect(message).toBeInvalid(StringEqualMinMaxBytesSchema, 1);
});

it("string - pattern - valid", () => {
  const message = StringPattern.fromJson({"val":"Foo123"});
  expect(message).toBeValid(StringPatternSchema);
});

it("string - pattern - invalid", () => {
  const message = StringPattern.fromJson({"val":"!@#$%^&*()"});
  expect(message).toBeInvalid(StringPatternSchema, 1);
});

it("string - pattern - invalid (empty)", () => {
  const message = StringPattern.fromJson({});
  expect(message).toBeInvalid(StringPatternSchema, 1);
});

it("string - pattern - invalid (null)", () => {
  const message = StringPattern.fromJson({"val":"a\u0000"});
  expect(message).toBeInvalid(StringPatternSchema, 1);
});

it("string - pattern (escapes) - valid", () => {
  const message = StringPatternEscapes.fromJson({"val":"* \\ x"});
  expect(message).toBeValid(StringPatternEscapesSchema);
});

it("string - pattern (escapes) - invalid", () => {
  const message = StringPatternEscapes.fromJson({"val":"invalid"});
  expect(message).toBeInvalid(StringPatternEscapesSchema, 1);
});

it("string - pattern (escapes) - invalid (empty)", () => {
  const message = StringPatternEscapes.fromJson({});
  expect(message).toBeInvalid(StringPatternEscapesSchema, 1);
});

it("string - prefix - valid", () => {
  const message = StringPrefix.fromJson({"val":"foobar"});
  expect(message).toBeValid(StringPrefixSchema);
});

it("string - prefix - valid (only)", () => {
  const message = StringPrefix.fromJson({"val":"foo"});
  expect(message).toBeValid(StringPrefixSchema);
});

it("string - prefix - invalid", () => {
  const message = StringPrefix.fromJson({"val":"bar"});
  expect(message).toBeInvalid(StringPrefixSchema, 1);
});

it("string - prefix - invalid (case-sensitive)", () => {
  const message = StringPrefix.fromJson({"val":"Foobar"});
  expect(message).toBeInvalid(StringPrefixSchema, 1);
});

it("string - contains - valid", () => {
  const message = StringContains.fromJson({"val":"candy bars"});
  expect(message).toBeValid(StringContainsSchema);
});

it("string - contains - valid (only)", () => {
  const message = StringContains.fromJson({"val":"bar"});
  expect(message).toBeValid(StringContainsSchema);
});

it("string - contains - invalid", () => {
  const message = StringContains.fromJson({"val":"candy bazs"});
  expect(message).toBeInvalid(StringContainsSchema, 1);
});

it("string - contains - invalid (case-sensitive)", () => {
  const message = StringContains.fromJson({"val":"Candy Bars"});
  expect(message).toBeInvalid(StringContainsSchema, 1);
});

it("string - not contains - valid", () => {
  const message = StringNotContains.fromJson({"val":"candy bazs"});
  expect(message).toBeValid(StringNotContainsSchema);
});

it("string - not contains - valid (case-sensitive)", () => {
  const message = StringNotContains.fromJson({"val":"Candy Bars"});
  expect(message).toBeValid(StringNotContainsSchema);
});

it("string - not contains - invalid", () => {
  const message = StringNotContains.fromJson({"val":"candy bars"});
  expect(message).toBeInvalid(StringNotContainsSchema, 1);
});

it("string - not contains - invalid (equal)", () => {
  const message = StringNotContains.fromJson({"val":"bar"});
  expect(message).toBeInvalid(StringNotContainsSchema, 1);
});

it("string - suffix - valid", () => {
  const message = StringSuffix.fromJson({"val":"foobaz"});
  expect(message).toBeValid(StringSuffixSchema);
});

it("string - suffix - valid (only)", () => {
  const message = StringSuffix.fromJson({"val":"baz"});
  expect(message).toBeValid(StringSuffixSchema);
});

it("string - suffix - invalid", () => {
  const message = StringSuffix.fromJson({"val":"foobar"});
  expect(message).toBeInvalid(StringSuffixSchema, 1);
});

it("string - suffix - invalid (case-sensitive)", () => {
  const message = StringSuffix.fromJson({"val":"FooBaz"});
  expect(message).toBeInvalid(StringSuffixSchema, 1);
});

it("string - email - valid", () => {
  const message = StringEmail.fromJson({"val":"foo@bar.com"});
  expect(message).toBeValid(StringEmailSchema);
});

it("string - email - valid (name)", () => {
  const message = StringEmail.fromJson({"val":"John Smith <foo@bar.com>"});
  expect(message).toBeValid(StringEmailSchema);
});

it("string - email - invalid", () => {
  const message = StringEmail.fromJson({"val":"foobar"});
  expect(message).toBeInvalid(StringEmailSchema, 1);
});

it("string - email - invalid (local segment too long)", () => {
  const message = StringEmail.fromJson({"val":"x0123456789012345678901234567890123456789012345678901234567890123456789@example.com"});
  expect(message).toBeInvalid(StringEmailSchema, 1);
});

it("string - email - invalid (hostname too long)", () => {
  const message = StringEmail.fromJson({"val":"foo@x0123456789012345678901234567890123456789012345678901234567890123456789.com"});
  expect(message).toBeInvalid(StringEmailSchema, 1);
});

it("string - email - invalid (bad hostname)", () => {
  const message = StringEmail.fromJson({"val":"foo@-bar.com"});
  expect(message).toBeInvalid(StringEmailSchema, 1);
});

it("string - email - empty", () => {
  const message = StringEmail.fromJson({});
  expect(message).toBeInvalid(StringEmailSchema, 1);
});

it("string - address - valid hostname", () => {
  const message = StringAddress.fromJson({"val":"example.com"});
  expect(message).toBeValid(StringAddressSchema);
});

it("string - address - valid hostname (uppercase)", () => {
  const message = StringAddress.fromJson({"val":"ASD.example.com"});
  expect(message).toBeValid(StringAddressSchema);
});

it("string - address - valid hostname (hyphens)", () => {
  const message = StringAddress.fromJson({"val":"foo-bar.com"});
  expect(message).toBeValid(StringAddressSchema);
});

it("string - address - valid hostname (trailing dot)", () => {
  const message = StringAddress.fromJson({"val":"example.com."});
  expect(message).toBeValid(StringAddressSchema);
});

it("string - address - invalid hostname", () => {
  const message = StringAddress.fromJson({"val":"!@#$%^&"});
  expect(message).toBeInvalid(StringAddressSchema, 1);
});

it("string - address - invalid hostname (underscore)", () => {
  const message = StringAddress.fromJson({"val":"foo_bar.com"});
  expect(message).toBeInvalid(StringAddressSchema, 1);
});

it("string - address - invalid hostname (too long)", () => {
  const message = StringAddress.fromJson({"val":"x0123456789012345678901234567890123456789012345678901234567890123456789.com"});
  expect(message).toBeInvalid(StringAddressSchema, 1);
});

it("string - address - invalid hostname (trailing hyphens)", () => {
  const message = StringAddress.fromJson({"val":"foo-bar-.com"});
  expect(message).toBeInvalid(StringAddressSchema, 1);
});

it("string - address - invalid hostname (leading hyphens)", () => {
  const message = StringAddress.fromJson({"val":"foo-bar.-com"});
  expect(message).toBeInvalid(StringAddressSchema, 1);
});

it("string - address - invalid hostname (empty)", () => {
  const message = StringAddress.fromJson({"val":"asd..asd.com"});
  expect(message).toBeInvalid(StringAddressSchema, 1);
});

it("string - address - invalid hostname (IDNs)", () => {
  const message = StringAddress.fromJson({"val":"??????.com"});
  expect(message).toBeInvalid(StringAddressSchema, 1);
});

it("string - address - valid ip (v4)", () => {
  const message = StringAddress.fromJson({"val":"192.168.0.1"});
  expect(message).toBeValid(StringAddressSchema);
});

it("string - address - valid ip (v6)", () => {
  const message = StringAddress.fromJson({"val":"3e::99"});
  expect(message).toBeValid(StringAddressSchema);
});

it("string - address - invalid ip", () => {
  const message = StringAddress.fromJson({"val":"ff::fff::0b"});
  expect(message).toBeInvalid(StringAddressSchema, 1);
});

it("string - hostname - valid", () => {
  const message = StringHostname.fromJson({"val":"example.com"});
  expect(message).toBeValid(StringHostnameSchema);
});

it("string - hostname - valid (uppercase)", () => {
  const message = StringHostname.fromJson({"val":"ASD.example.com"});
  expect(message).toBeValid(StringHostnameSchema);
});

it("string - hostname - valid (hyphens)", () => {
  const message = StringHostname.fromJson({"val":"foo-bar.com"});
  expect(message).toBeValid(StringHostnameSchema);
});

it("string - hostname - valid (trailing dot)", () => {
  const message = StringHostname.fromJson({"val":"example.com."});
  expect(message).toBeValid(StringHostnameSchema);
});

it("string - hostname - invalid", () => {
  const message = StringHostname.fromJson({"val":"!@#$%^&"});
  expect(message).toBeInvalid(StringHostnameSchema, 1);
});

it("string - hostname - invalid (underscore)", () => {
  const message = StringHostname.fromJson({"val":"foo_bar.com"});
  expect(message).toBeInvalid(StringHostnameSchema, 1);
});

it("string - hostname - invalid (too long)", () => {
  const message = StringHostname.fromJson({"val":"x0123456789012345678901234567890123456789012345678901234567890123456789.com"});
  expect(message).toBeInvalid(StringHostnameSchema, 1);
});

it("string - hostname - invalid (trailing hyphens)", () => {
  const message = StringHostname.fromJson({"val":"foo-bar-.com"});
  expect(message).toBeInvalid(StringHostnameSchema, 1);
});

it("string - hostname - invalid (leading hyphens)", () => {
  const message = StringHostname.fromJson({"val":"foo-bar.-com"});
  expect(message).toBeInvalid(StringHostnameSchema, 1);
});

it("string - hostname - invalid (empty)", () => {
  const message = StringHostname.fromJson({"val":"asd..asd.com"});
  expect(message).toBeInvalid(StringHostnameSchema, 1);
});

it("string - hostname - invalid (IDNs)", () => {
  const message = StringHostname.fromJson({"val":"??????.com"});
  expect(message).toBeInvalid(StringHostnameSchema, 1);
});

it("string - IP - valid (v4)", () => {
  const message = StringIP.fromJson({"val":"192.168.0.1"});
  expect(message).toBeValid(StringIPSchema);
});

it("string - IP - valid (v6)", () => {
  const message = StringIP.fromJson({"val":"3e::99"});
  expect(message).toBeValid(StringIPSchema);
});

it("string - IP - invalid", () => {
  const message = StringIP.fromJson({"val":"foobar"});
  expect(message).toBeInvalid(StringIPSchema, 1);
});

it("string - IPv4 - valid", () => {
  const message = StringIPv4.fromJson({"val":"192.168.0.1"});
  expect(message).toBeValid(StringIPv4Schema);
});

it("string - IPv4 - invalid", () => {
  const message = StringIPv4.fromJson({"val":"foobar"});
  expect(message).toBeInvalid(StringIPv4Schema, 1);
});

it("string - IPv4 - invalid (erroneous)", () => {
  const message = StringIPv4.fromJson({"val":"256.0.0.0"});
  expect(message).toBeInvalid(StringIPv4Schema, 1);
});

it("string - IPv4 - invalid (v6)", () => {
  const message = StringIPv4.fromJson({"val":"3e::99"});
  expect(message).toBeInvalid(StringIPv4Schema, 1);
});

it("string - IPv6 - valid", () => {
  const message = StringIPv6.fromJson({"val":"2001:0db8:85a3:0000:0000:8a2e:0370:7334"});
  expect(message).toBeValid(StringIPv6Schema);
});

it("string - IPv6 - valid (collapsed)", () => {
  const message = StringIPv6.fromJson({"val":"2001:db8:85a3::8a2e:370:7334"});
  expect(message).toBeValid(StringIPv6Schema);
});

it("string - IPv6 - invalid", () => {
  const message = StringIPv6.fromJson({"val":"foobar"});
  expect(message).toBeInvalid(StringIPv6Schema, 1);
});

it("string - IPv6 - invalid (v4)", () => {
  const message = StringIPv6.fromJson({"val":"192.168.0.1"});
  expect(message).toBeInvalid(StringIPv6Schema, 1);
});

it("string - IPv6 - invalid (erroneous)", () => {
  const message = StringIPv6.fromJson({"val":"ff::fff::0b"});
  expect(message).toBeInvalid(StringIPv6Schema, 1);
});

it("string - URI - valid", () => {
  const message = StringURI.fromJson({"val":"http://example.com/foo/bar?baz=quux"});
  expect(message).toBeValid(StringURISchema);
});

it("string - URI - invalid", () => {
  const message = StringURI.fromJson({"val":"!@#$%^&*%$#"});
  expect(message).toBeInvalid(StringURISchema, 1);
});

it("string - URI - invalid (relative)", () => {
  const message = StringURI.fromJson({"val":"/foo/bar?baz=quux"});
  expect(message).toBeInvalid(StringURISchema, 1);
});

it("string - URI - valid", () => {
  const message = StringURIRef.fromJson({"val":"http://example.com/foo/bar?baz=quux"});
  expect(message).toBeValid(StringURIRefSchema);
});

it("string - URI - valid (relative)", () => {
  const message = StringURIRef.fromJson({"val":"/foo/bar?baz=quux"});
  expect(message).toBeValid(StringURIRefSchema);
});

it("string - URI - invalid", () => {
  const message = StringURIRef.fromJson({"val":"!@#$%^&*%$#"});
  expect(message).toBeInvalid(StringURIRefSchema, 1);
});

it("string - UUID - valid (nil)", () => {
  const message = StringUUID.fromJson({"val":"00000000-0000-0000-0000-000000000000"});
  expect(message).toBeValid(StringUUIDSchema);
});

it("string - UUID - valid (v1)", () => {
  const message = StringUUID.fromJson({"val":"b45c0c80-8880-11e9-a5b1-000000000000"});
  expect(message).toBeValid(StringUUIDSchema);
});

it("string - UUID - valid (v1 - case-insensitive)", () => {
  const message = StringUUID.fromJson({"val":"B45C0C80-8880-11E9-A5B1-000000000000"});
  expect(message).toBeValid(StringUUIDSchema);
});

it("string - UUID - valid (v2)", () => {
  const message = StringUUID.fromJson({"val":"b45c0c80-8880-21e9-a5b1-000000000000"});
  expect(message).toBeValid(StringUUIDSchema);
});

it("string - UUID - valid (v2 - case-insensitive)", () => {
  const message = StringUUID.fromJson({"val":"B45C0C80-8880-21E9-A5B1-000000000000"});
  expect(message).toBeValid(StringUUIDSchema);
});

it("string - UUID - valid (v3)", () => {
  const message = StringUUID.fromJson({"val":"a3bb189e-8bf9-3888-9912-ace4e6543002"});
  expect(message).toBeValid(StringUUIDSchema);
});

it("string - UUID - valid (v3 - case-insensitive)", () => {
  const message = StringUUID.fromJson({"val":"A3BB189E-8BF9-3888-9912-ACE4E6543002"});
  expect(message).toBeValid(StringUUIDSchema);
});

it("string - UUID - valid (v4)", () => {
  const message = StringUUID.fromJson({"val":"8b208305-00e8-4460-a440-5e0dcd83bb0a"});
  expect(message).toBeValid(StringUUIDSchema);
});

it("string - UUID - valid (v4 - case-insensitive)", () => {
  const message = StringUUID.fromJson({"val":"8B208305-00E8-4460-A440-5E0DCD83BB0A"});
  expect(message).toBeValid(StringUUIDSchema);
});

it("string - UUID - valid (v5)", () => {
  const message = StringUUID.fromJson({"val":"a6edc906-2f9f-5fb2-a373-efac406f0ef2"});
  expect(message).toBeValid(StringUUIDSchema);
});

it("string - UUID - valid (v5 - case-insensitive)", () => {
  const message = StringUUID.fromJson({"val":"A6EDC906-2F9F-5FB2-A373-EFAC406F0EF2"});
  expect(message).toBeValid(StringUUIDSchema);
});

it("string - UUID - invalid", () => {
  const message = StringUUID.fromJson({"val":"foobar"});
  expect(message).toBeInvalid(StringUUIDSchema, 1);
});

it("string - UUID - invalid (bad UUID)", () => {
  const message = StringUUID.fromJson({"val":"ffffffff-ffff-ffff-ffff-fffffffffffff"});
  expect(message).toBeInvalid(StringUUIDSchema, 1);
});

it("string - UUID - valid (ignore_empty)", () => {
  const message = StringUUIDIgnore.fromJson({});
  expect(message).toBeValid(StringUUIDIgnoreSchema);
});

it("string - http header name - valid", () => {
  const message = StringHttpHeaderName.fromJson({"val":"clustername"});
  expect(message).toBeValid(StringHttpHeaderNameSchema);
});

it("string - http header name - valid", () => {
  const message = StringHttpHeaderName.fromJson({"val":":path"});
  expect(message).toBeValid(StringHttpHeaderNameSchema);
});

it("string - http header name - valid (nums)", () => {
  const message = StringHttpHeaderName.fromJson({"val":"cluster-123"});
  expect(message).toBeValid(StringHttpHeaderNameSchema);
});

it("string - http header name - valid (special token)", () => {
  const message = StringHttpHeaderName.fromJson({"val":"!+#&.%"});
  expect(message).toBeValid(StringHttpHeaderNameSchema);
});

it("string - http header name - valid (period)", () => {
  const message = StringHttpHeaderName.fromJson({"val":"CLUSTER.NAME"});
  expect(message).toBeValid(StringHttpHeaderNameSchema);
});

it("string - http header name - invalid", () => {
  const message = StringHttpHeaderName.fromJson({"val":":"});
  expect(message).toBeInvalid(StringHttpHeaderNameSchema, 1);
});

it("string - http header name - invalid", () => {
  const message = StringHttpHeaderName.fromJson({"val":":path:"});
  expect(message).toBeInvalid(StringHttpHeaderNameSchema, 1);
});

it("string - http header name - invalid (space)", () => {
  const message = StringHttpHeaderName.fromJson({"val":"cluster name"});
  expect(message).toBeInvalid(StringHttpHeaderNameSchema, 1);
});

it("string - http header name - invalid (return)", () => {
  const message = StringHttpHeaderName.fromJson({"val":"example\r"});
  expect(message).toBeInvalid(StringHttpHeaderNameSchema, 1);
});

it("string - http header name - invalid (tab)", () => {
  const message = StringHttpHeaderName.fromJson({"val":"example\t"});
  expect(message).toBeInvalid(StringHttpHeaderNameSchema, 1);
});

it("string - http header name - invalid (slash)", () => {
  const message = StringHttpHeaderName.fromJson({"val":"/test/long/url"});
  expect(message).toBeInvalid(StringHttpHeaderNameSchema, 1);
});

it("string - http header value - valid", () => {
  const message = StringHttpHeaderValue.fromJson({"val":"cluster.name.123"});
  expect(message).toBeValid(StringHttpHeaderValueSchema);
});

it("string - http header value - valid (uppercase)", () => {
  const message = StringHttpHeaderValue.fromJson({"val":"/TEST/LONG/URL"});
  expect(message).toBeValid(StringHttpHeaderValueSchema);
});

it("string - http header value - valid (spaces)", () => {
  const message = StringHttpHeaderValue.fromJson({"val":"cluster name"});
  expect(message).toBeValid(StringHttpHeaderValueSchema);
});

it("string - http header value - valid (tab)", () => {
  const message = StringHttpHeaderValue.fromJson({"val":"example\t"});
  expect(message).toBeValid(StringHttpHeaderValueSchema);
});

it("string - http header value - valid (special token)", () => {
  const message = StringHttpHeaderValue.fromJson({"val":"!#%&./+"});
  expect(message).toBeValid(StringHttpHeaderValueSchema);
});

it("string - http header value - invalid (NUL)", () => {
  const message = StringHttpHeaderValue.fromJson({"val":"foo\u0000bar"});
  expect(message).toBeInvalid(StringHttpHeaderValueSchema, 1);
});

it("string - http header value - invalid (DEL)", () => {
  const message = StringHttpHeaderValue.fromJson({"val":""});
  expect(message).toBeInvalid(StringHttpHeaderValueSchema, 1);
});

it("string - http header value - invalid", () => {
  const message = StringHttpHeaderValue.fromJson({"val":"example\r"});
  expect(message).toBeInvalid(StringHttpHeaderValueSchema, 1);
});

it("string - non-strict valid header - valid", () => {
  const message = StringValidHeader.fromJson({"val":"cluster.name.123"});
  expect(message).toBeValid(StringValidHeaderSchema);
});

it("string - non-strict valid header - valid (uppercase)", () => {
  const message = StringValidHeader.fromJson({"val":"/TEST/LONG/URL"});
  expect(message).toBeValid(StringValidHeaderSchema);
});

it("string - non-strict valid header - valid (spaces)", () => {
  const message = StringValidHeader.fromJson({"val":"cluster name"});
  expect(message).toBeValid(StringValidHeaderSchema);
});

it("string - non-strict valid header - valid (tab)", () => {
  const message = StringValidHeader.fromJson({"val":"example\t"});
  expect(message).toBeValid(StringValidHeaderSchema);
});

it("string - non-strict valid header - valid (DEL)", () => {
  const message = StringValidHeader.fromJson({"val":""});
  expect(message).toBeValid(StringValidHeaderSchema);
});

it("string - non-strict valid header - invalid (NUL)", () => {
  const message = StringValidHeader.fromJson({"val":"foo\u0000bar"});
  expect(message).toBeInvalid(StringValidHeaderSchema, 1);
});

it("string - non-strict valid header - invalid (CR)", () => {
  const message = StringValidHeader.fromJson({"val":"example\r"});
  expect(message).toBeInvalid(StringValidHeaderSchema, 1);
});

it("string - non-strict valid header - invalid (NL)", () => {
  const message = StringValidHeader.fromJson({"val":"exa\nmple"});
  expect(message).toBeInvalid(StringValidHeaderSchema, 1);
});
