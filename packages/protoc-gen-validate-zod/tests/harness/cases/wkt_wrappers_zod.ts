// @generated by protoc-gen-validate-zod v0.0.2-dev with parameter "target=ts"
// @generated from file tests/harness/cases/wkt_wrappers.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {z} from "zod";
import {bytes, bytesMinLength, double, float, int32, int64, numberGt, stringIsUuid, uint32, uint64} from "protobuf-zod";
import {protoInt64} from "@bufbuild/protobuf";

/**
 * @generated from message tests.harness.cases.WrapperNone
 */
export const WrapperNoneSchema = z.object({
  /**
   * @generated from field: google.protobuf.Int32Value val = 1;
   */
  val: int32.nullish(),
});

/**
 * @generated from message tests.harness.cases.WrapperFloat
 */
export const WrapperFloatSchema = z.object({
  /**
   * @generated from field: google.protobuf.FloatValue val = 1;
   * @validate  {"float":{"gt":0}}
   */
  val: float.refine(numberGt(0)).nullish(),
});

/**
 * @generated from message tests.harness.cases.WrapperDouble
 */
export const WrapperDoubleSchema = z.object({
  /**
   * @generated from field: google.protobuf.DoubleValue val = 1;
   * @validate  {"double":{"gt":0}}
   */
  val: double.refine(numberGt(0)).nullish(),
});

/**
 * @generated from message tests.harness.cases.WrapperInt64
 */
export const WrapperInt64Schema = z.object({
  /**
   * @generated from field: google.protobuf.Int64Value val = 1;
   * @validate  {"int64":{"gt":"0"}}
   */
  val: int64.refine(numberGt(protoInt64.zero)).nullish(),
});

/**
 * @generated from message tests.harness.cases.WrapperInt32
 */
export const WrapperInt32Schema = z.object({
  /**
   * @generated from field: google.protobuf.Int32Value val = 1;
   * @validate  {"int32":{"gt":0}}
   */
  val: int32.refine(numberGt(0)).nullish(),
});

/**
 * @generated from message tests.harness.cases.WrapperUInt64
 */
export const WrapperUInt64Schema = z.object({
  /**
   * @generated from field: google.protobuf.UInt64Value val = 1;
   * @validate  {"uint64":{"gt":"0"}}
   */
  val: uint64.refine(numberGt(protoInt64.zero)).nullish(),
});

/**
 * @generated from message tests.harness.cases.WrapperUInt32
 */
export const WrapperUInt32Schema = z.object({
  /**
   * @generated from field: google.protobuf.UInt32Value val = 1;
   * @validate  {"uint32":{"gt":0}}
   */
  val: uint32.refine(numberGt(0)).nullish(),
});

/**
 * @generated from message tests.harness.cases.WrapperBool
 */
export const WrapperBoolSchema = z.object({
  /**
   * @generated from field: google.protobuf.BoolValue val = 1;
   * @validate  {"bool":{"const":true}}
   */
  val: z.boolean().and(z.literal(true)).nullish(),
});

/**
 * @generated from message tests.harness.cases.WrapperString
 */
export const WrapperStringSchema = z.object({
  /**
   * @generated from field: google.protobuf.StringValue val = 1;
   * @validate  {"string":{"suffix":"bar"}}
   */
  val: z.string().endsWith("bar").nullish(),
});

/**
 * @generated from message tests.harness.cases.WrapperBytes
 */
export const WrapperBytesSchema = z.object({
  /**
   * @generated from field: google.protobuf.BytesValue val = 1;
   * @validate  {"bytes":{"minLen":"3"}}
   */
  val: bytes.refine(bytesMinLength(3)).nullish(),
});

/**
 * @generated from message tests.harness.cases.WrapperRequiredString
 */
export const WrapperRequiredStringSchema = z.object({
  /**
   * @generated from field: google.protobuf.StringValue val = 1;
   * @validate  {"message":{"required":true},"string":{"const":"bar"}}
   */
  val: z.string().and(z.literal("bar")),
});

/**
 * @generated from message tests.harness.cases.WrapperRequiredEmptyString
 */
export const WrapperRequiredEmptyStringSchema = z.object({
  /**
   * @generated from field: google.protobuf.StringValue val = 1;
   * @validate  {"message":{"required":true},"string":{"const":""}}
   */
  val: z.string().and(z.literal("")),
});

/**
 * @generated from message tests.harness.cases.WrapperOptionalUuidString
 */
export const WrapperOptionalUuidStringSchema = z.object({
  /**
   * @generated from field: google.protobuf.StringValue val = 1;
   * @validate  {"message":{"required":false},"string":{"uuid":true}}
   */
  val: z.string().refine(stringIsUuid()).nullish(),
});

/**
 * @generated from message tests.harness.cases.WrapperRequiredFloat
 */
export const WrapperRequiredFloatSchema = z.object({
  /**
   * @generated from field: google.protobuf.FloatValue val = 1;
   * @validate  {"message":{"required":true},"float":{"gt":0}}
   */
  val: float.refine(numberGt(0)),
});

