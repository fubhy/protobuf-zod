// @generated by protoc-gen-validate-zod v0.0.2-dev with parameter "target=ts"
// @generated from file tests/harness/cases/repeated.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {z} from "zod";
import {AnEnum, RepeatedEmbeddedEnumIn_AnotherInEnum, RepeatedEmbeddedEnumNotIn_AnotherNotInEnum} from "./repeated_pb.js";
import {double, float, int64, isIn, isNotIn, isUniqueList, numberGt, sfixed32, uint32} from "protobuf-zod";
import {protoInt64} from "@bufbuild/protobuf";
import {EmbedSchema as EmbedSchema$1} from "./other_package/embed_zod.js";

/**
 * @generated from enum tests.harness.cases.AnEnum
 */
export const AnEnumSchema = z.nativeEnum(AnEnum);

/**
 * @generated from message tests.harness.cases.Embed
 */
export const EmbedSchema = z.object({
  /**
   * @generated from field: int64 val = 1;
   * @validate  {"int64":{"gt":"0"}}
   */
  val: int64.refine(numberGt(protoInt64.zero)),
});

/**
 * @generated from message tests.harness.cases.RepeatedNone
 */
export const RepeatedNoneSchema = z.object({
  /**
   * @generated from field: repeated int64 val = 1;
   */
  val: int64.array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedEmbedNone
 */
export const RepeatedEmbedNoneSchema = z.object({
  /**
   * @generated from field: repeated tests.harness.cases.Embed val = 1;
   */
  val: z.lazy(() => EmbedSchema).nullish().array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedEmbedCrossPackageNone
 */
export const RepeatedEmbedCrossPackageNoneSchema = z.object({
  /**
   * @generated from field: repeated tests.harness.cases.other_package.Embed val = 1;
   */
  val: z.lazy(() => EmbedSchema$1).nullish().array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedMin
 */
export const RepeatedMinSchema = z.object({
  /**
   * @generated from field: repeated tests.harness.cases.Embed val = 1;
   * @validate  {"repeated":{"minItems":"2"}}
   */
  val: z.lazy(() => EmbedSchema).nullish().array().min(2),
});

/**
 * @generated from message tests.harness.cases.RepeatedMax
 */
export const RepeatedMaxSchema = z.object({
  /**
   * @generated from field: repeated double val = 1;
   * @validate  {"repeated":{"maxItems":"3"}}
   */
  val: double.array().max(3),
});

/**
 * @generated from message tests.harness.cases.RepeatedMinMax
 */
export const RepeatedMinMaxSchema = z.object({
  /**
   * @generated from field: repeated sfixed32 val = 1;
   * @validate  {"repeated":{"minItems":"2","maxItems":"4"}}
   */
  val: sfixed32.array().max(4).min(2),
});

/**
 * @generated from message tests.harness.cases.RepeatedExact
 */
export const RepeatedExactSchema = z.object({
  /**
   * @generated from field: repeated uint32 val = 1;
   * @validate  {"repeated":{"minItems":"3","maxItems":"3"}}
   */
  val: uint32.array().max(3).min(3),
});

/**
 * @generated from message tests.harness.cases.RepeatedUnique
 */
export const RepeatedUniqueSchema = z.object({
  /**
   * @generated from field: repeated string val = 1;
   * @validate  {"repeated":{"unique":true}}
   */
  val: z.string().array().refine(isUniqueList()),
});

/**
 * @generated from message tests.harness.cases.RepeatedItemRule
 */
export const RepeatedItemRuleSchema = z.object({
  /**
   * @generated from field: repeated float val = 1;
   * @validate  {"repeated":{"items":{"float":{"gt":0}}}}
   */
  val: float.refine(numberGt(0)).array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedItemPattern
 */
export const RepeatedItemPatternSchema = z.object({
  /**
   * @generated from field: repeated string val = 1;
   * @validate  {"repeated":{"items":{"string":{"pattern":"(?i)^[a-z0-9]+$"}}}}
   */
  val: z.string().regex(new RegExp("invalid regular expression^")).array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedEmbedSkip
 */
export const RepeatedEmbedSkipSchema = z.object({
  /**
   * @generated from field: repeated tests.harness.cases.Embed val = 1;
   * @validate  {"repeated":{"items":{"message":{"skip":true}}}}
   */
  val: z.any().nullish().array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedItemIn
 */
export const RepeatedItemInSchema = z.object({
  /**
   * @generated from field: repeated string val = 1;
   * @validate  {"repeated":{"items":{"string":{"in":["foo","bar"]}}}}
   */
  val: z.string().refine(isIn([
    "foo",
    "bar",
  ])).array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedItemNotIn
 */
export const RepeatedItemNotInSchema = z.object({
  /**
   * @generated from field: repeated string val = 1;
   * @validate  {"repeated":{"items":{"string":{"notIn":["foo","bar"]}}}}
   */
  val: z.string().refine(isNotIn([
    "foo",
    "bar",
  ])).array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedEnumIn
 */
export const RepeatedEnumInSchema = z.object({
  /**
   * @generated from field: repeated tests.harness.cases.AnEnum val = 1;
   * @validate  {"repeated":{"items":{"enum":{"in":[0]}}}}
   */
  val: z.lazy(() => AnEnumSchema).refine(isIn([
    0,
  ])).array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedEnumNotIn
 */
export const RepeatedEnumNotInSchema = z.object({
  /**
   * @generated from field: repeated tests.harness.cases.AnEnum val = 1;
   * @validate  {"repeated":{"items":{"enum":{"notIn":[0]}}}}
   */
  val: z.lazy(() => AnEnumSchema).refine(isNotIn([
    0,
  ])).array(),
});

/**
 * @generated from enum tests.harness.cases.RepeatedEmbeddedEnumIn.AnotherInEnum
 */
export const RepeatedEmbeddedEnumIn_AnotherInEnumSchema = z.nativeEnum(RepeatedEmbeddedEnumIn_AnotherInEnum);

/**
 * @generated from message tests.harness.cases.RepeatedEmbeddedEnumIn
 */
export const RepeatedEmbeddedEnumInSchema = z.object({
  /**
   * @generated from field: repeated tests.harness.cases.RepeatedEmbeddedEnumIn.AnotherInEnum val = 1;
   * @validate  {"repeated":{"items":{"enum":{"in":[0]}}}}
   */
  val: z.lazy(() => RepeatedEmbeddedEnumIn_AnotherInEnumSchema).refine(isIn([
    0,
  ])).array(),
});

/**
 * @generated from enum tests.harness.cases.RepeatedEmbeddedEnumNotIn.AnotherNotInEnum
 */
export const RepeatedEmbeddedEnumNotIn_AnotherNotInEnumSchema = z.nativeEnum(RepeatedEmbeddedEnumNotIn_AnotherNotInEnum);

/**
 * @generated from message tests.harness.cases.RepeatedEmbeddedEnumNotIn
 */
export const RepeatedEmbeddedEnumNotInSchema = z.object({
  /**
   * @generated from field: repeated tests.harness.cases.RepeatedEmbeddedEnumNotIn.AnotherNotInEnum val = 1;
   * @validate  {"repeated":{"items":{"enum":{"notIn":[0]}}}}
   */
  val: z.lazy(() => RepeatedEmbeddedEnumNotIn_AnotherNotInEnumSchema).refine(isNotIn([
    0,
  ])).array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedAnyIn
 */
export const RepeatedAnyInSchema = z.object({
  /**
   * @generated from field: repeated google.protobuf.Any val = 1;
   * @validate  {"repeated":{"items":{"any":{"in":["type.googleapis.com/google.protobuf.Duration"]}}}}
   */
  val: z.any().nullish().array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedAnyNotIn
 */
export const RepeatedAnyNotInSchema = z.object({
  /**
   * @generated from field: repeated google.protobuf.Any val = 1;
   * @validate  {"repeated":{"items":{"any":{"notIn":["type.googleapis.com/google.protobuf.Timestamp"]}}}}
   */
  val: z.any().nullish().array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedMinAndItemLen
 */
export const RepeatedMinAndItemLenSchema = z.object({
  /**
   * @generated from field: repeated string val = 1;
   * @validate  {"repeated":{"minItems":"1","items":{"string":{"len":"3"}}}}
   */
  val: z.string().length(3).array().min(1),
});

/**
 * @generated from message tests.harness.cases.RepeatedMinAndMaxItemLen
 */
export const RepeatedMinAndMaxItemLenSchema = z.object({
  /**
   * @generated from field: repeated string val = 1;
   * @validate  {"repeated":{"minItems":"1","maxItems":"3"}}
   */
  val: z.string().array().max(3).min(1),
});

/**
 * @generated from message tests.harness.cases.RepeatedDuration
 */
export const RepeatedDurationSchema = z.object({
  /**
   * @generated from field: repeated google.protobuf.Duration val = 1;
   * @validate  {"repeated":{"items":{"duration":{"gte":"0.001s"}}}}
   */
  val: z.any().nullish().array(),
});

/**
 * @generated from message tests.harness.cases.RepeatedExactIgnore
 */
export const RepeatedExactIgnoreSchema = z.object({
  /**
   * @generated from field: repeated uint32 val = 1;
   * @validate  {"repeated":{"minItems":"3","maxItems":"3","ignoreEmpty":true}}
   */
  val: uint32.array().max(3).min(3),
});

