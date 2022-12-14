// @generated by protoc-gen-validate-zod-test v0.0.2-dev with parameter "target=ts,cases=packages/protoc-gen-validate-zod/tests/cases.txt,descriptor=vendor/cases.bin"
// @generated from file tests/harness/cases/kitchen_sink.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {expect, it} from "vitest";
import {createRegistry, Duration} from "@bufbuild/protobuf";
import {KitchenSinkMessage} from "./kitchen_sink_pb.js";
import {KitchenSinkMessageSchema} from "./kitchen_sink_zod.js";

it("kitchensink - field - valid", () => {
  const registry = createRegistry(Duration);
  const message = KitchenSinkMessage.fromJson({"val":{"const":"abcd","intConst":5,"floatVal":1,"durVal":"3s","tsVal":"1970-01-01T00:00:17Z","floatConst":7,"doubleIn":123,"enumConst":"ComplexTWO","anyVal":{"value":"0s","@type":"type.googleapis.com/google.protobuf.Duration"},"repTsVal":["1970-01-01T00:00:03Z"],"mapVal":{"-2":"b","-1":"a"},"bytesVal":"AJk=","x":"foobar"}}, { typeRegistry: registry });
  expect(message).toBeValid(KitchenSinkMessageSchema);
});

it("kitchensink - valid (unset)", () => {
  const message = KitchenSinkMessage.fromJson({});
  expect(message).toBeValid(KitchenSinkMessageSchema);
});

it("kitchensink - field - invalid", () => {
  const message = KitchenSinkMessage.fromJson({"val":{}});
  expect(message).toBeInvalid(KitchenSinkMessageSchema, 7);
});

it("kitchensink - field - embedded - invalid", () => {
  const message = KitchenSinkMessage.fromJson({"val":{"another":{}}});
  expect(message).toBeInvalid(KitchenSinkMessageSchema, 14);
});

it("kitchensink - field - invalid (transitive)", () => {
  const message = KitchenSinkMessage.fromJson({"val":{"const":"abcd","nested":{},"boolConst":true}});
  expect(message).toBeInvalid(KitchenSinkMessageSchema, 14);
});
