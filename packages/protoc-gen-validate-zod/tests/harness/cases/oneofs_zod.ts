// @generated by protoc-gen-validate-zod v0.0.1-dev with parameter "target=ts"
// @generated from file tests/harness/cases/oneofs.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {z} from "zod";
import {bytes, bytesLength, bytesMaxLength, bytesMinLength, int32, numberGt, numberOutsideGteLte, oneof} from "protobuf-zod";

/**
 * @generated from message tests.harness.cases.TestOneOfMsg
 */
export const TestOneOfMsgSchema = z.object({
  /**
   * @generated from field: bool val = 1;
   * @validate  {"bool":{"const":true}}
   */
  val: z.boolean().and(z.literal(true)),
});

/**
 * @generated from message tests.harness.cases.OneOfNone
 */
export const OneOfNoneSchema = z.object({
  /**
   * @generated from oneof tests.harness.cases.OneOfNone.o
   */
  o: oneof([
    z.object({
      case: z.literal(undefined),
      value: z.literal(undefined).nullish(),
    }),
    z.object({
      /**
       * @generated from field: string x = 1;
       */
      case: z.literal("x"),
      value: z.string(),
    }),
    z.object({
      /**
       * @generated from field: int32 y = 2;
       */
      case: z.literal("y"),
      value: int32,
    }),
  ]).nullish(),
});

/**
 * @generated from message tests.harness.cases.OneOf
 */
export const OneOfSchema = z.object({
  /**
   * @generated from oneof tests.harness.cases.OneOf.o
   */
  o: oneof([
    z.object({
      case: z.literal(undefined),
      value: z.literal(undefined).nullish(),
    }),
    z.object({
      /**
       * @generated from field: string x = 1;
       * @validate  {"string":{"prefix":"foo"}}
       */
      case: z.literal("x"),
      value: z.string().startsWith("foo"),
    }),
    z.object({
      /**
       * @generated from field: int32 y = 2;
       * @validate  {"int32":{"gt":0}}
       */
      case: z.literal("y"),
      value: int32.refine(numberGt(0)),
    }),
    z.object({
      /**
       * @generated from field: tests.harness.cases.TestOneOfMsg z = 3;
       */
      case: z.literal("z"),
      value: z.lazy(() => TestOneOfMsgSchema).nullish(),
    }),
  ]).nullish(),
});

/**
 * @generated from message tests.harness.cases.OneOfRequired
 */
export const OneOfRequiredSchema = z.object({
  /**
   * @generated from oneof tests.harness.cases.OneOfRequired.o
   */
  o: oneof([
    z.object({
      /**
       * @generated from field: string x = 1;
       */
      case: z.literal("x"),
      value: z.string(),
    }),
    z.object({
      /**
       * @generated from field: int32 y = 2;
       */
      case: z.literal("y"),
      value: int32,
    }),
    z.object({
      /**
       * @generated from field: int32 name_with_underscores = 3;
       */
      case: z.literal("nameWithUnderscores"),
      value: int32,
    }),
    z.object({
      /**
       * @generated from field: int32 under_and_1_number = 4;
       */
      case: z.literal("underAnd1Number"),
      value: int32,
    }),
  ]),
});

/**
 * @generated from message tests.harness.cases.OneOfIgnoreEmpty
 */
export const OneOfIgnoreEmptySchema = z.object({
  /**
   * @generated from oneof tests.harness.cases.OneOfIgnoreEmpty.o
   */
  o: oneof([
    z.object({
      case: z.literal(undefined),
      value: z.literal(undefined).nullish(),
    }),
    z.object({
      /**
       * @generated from field: string x = 1;
       * @validate  {"string":{"minLen":"3","maxLen":"5","ignoreEmpty":true}}
       */
      case: z.literal("x"),
      value: z.literal("").or(z.string().min(3).max(5)),
    }),
    z.object({
      /**
       * @generated from field: bytes y = 2;
       * @validate  {"bytes":{"minLen":"3","maxLen":"5","ignoreEmpty":true}}
       */
      case: z.literal("y"),
      value: bytes.refine(bytesLength(0)).or(bytes.refine(bytesMaxLength(5)).refine(bytesMinLength(3))),
    }),
    z.object({
      /**
       * @generated from field: int32 z = 3;
       * @validate  {"int32":{"lte":128,"gte":256,"ignoreEmpty":true}}
       */
      case: z.literal("z"),
      value: z.literal(0).or(int32.refine(numberOutsideGteLte(256, 128))),
    }),
  ]).nullish(),
});

