// @generated by protoc-gen-validate-zod v0.0.1-dev with parameter "target=ts"
// @generated from file tests/harness/cases/messages.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {z} from "zod";
import {uint64} from "protobuf-zod";
import {EmbedSchema} from "./other_package/embed_zod.js";

/**
 * @generated from message tests.harness.cases.TestMsg
 */
export const TestMsgSchema = z.object({
  /**
   * @generated from field: string const = 1;
   * @validate  {"string":{"const":"foo"}}
   */
  const: z.string().and(z.literal("foo")),
  /**
   * @generated from field: tests.harness.cases.TestMsg nested = 2;
   */
  nested: z.lazy(() => TestMsgSchema).nullish(),
});

/**
 * @generated from message tests.harness.cases.MessageNone.NoneMsg
 */
export const MessageNone_NoneMsgSchema = z.object({
});

/**
 * @generated from message tests.harness.cases.MessageNone
 */
export const MessageNoneSchema = z.object({
  /**
   * @generated from field: tests.harness.cases.MessageNone.NoneMsg val = 1;
   */
  val: z.lazy(() => MessageNone_NoneMsgSchema).nullish(),
});

/**
 * @generated from message tests.harness.cases.MessageDisabled
 */
export const MessageDisabledSchema = z.object({
  /**
   * @generated from field: uint64 val = 1;
   * @validate (disabled)  {"uint64":{"gt":"123"}}
   */
  val: uint64,
});

/**
 * @generated from message tests.harness.cases.MessageIgnored
 */
export const MessageIgnoredSchema = z.object({
  /**
   * @generated from field: uint64 val = 1;
   * @validate (disabled)  {"uint64":{"gt":"123"}}
   */
  val: uint64,
});

/**
 * @generated from message tests.harness.cases.Message
 */
export const MessageSchema = z.object({
  /**
   * @generated from field: tests.harness.cases.TestMsg val = 1;
   */
  val: z.lazy(() => TestMsgSchema).nullish(),
});

/**
 * @generated from message tests.harness.cases.MessageCrossPackage
 */
export const MessageCrossPackageSchema = z.object({
  /**
   * @generated from field: tests.harness.cases.other_package.Embed val = 1;
   */
  val: z.lazy(() => EmbedSchema).nullish(),
});

/**
 * @generated from message tests.harness.cases.MessageSkip
 */
export const MessageSkipSchema = z.object({
  /**
   * @generated from field: tests.harness.cases.TestMsg val = 1;
   * @validate  {"message":{"skip":true}}
   */
  val: z.any().nullish(),
});

/**
 * @generated from message tests.harness.cases.MessageRequired
 */
export const MessageRequiredSchema = z.object({
  /**
   * @generated from field: tests.harness.cases.TestMsg val = 1;
   * @validate  {"message":{"required":true}}
   */
  val: z.lazy(() => TestMsgSchema),
});

/**
 * @generated from message tests.harness.cases.MessageRequiredButOptional
 */
export const MessageRequiredButOptionalSchema = z.object({
  /**
   * @generated from field: optional tests.harness.cases.TestMsg val = 1;
   * @validate  {"message":{"required":true}}
   */
  val: z.lazy(() => TestMsgSchema).nullish(),
});

/**
 * @generated from message tests.harness.cases.MessageRequiredOneof
 */
export const MessageRequiredOneofSchema = z.object({
  /**
   * @generated from oneof tests.harness.cases.MessageRequiredOneof.one
   */
  one: z.object({
    /**
     * @generated from field: tests.harness.cases.TestMsg val = 1;
     * @validate  {"message":{"required":true}}
     */
    case: z.literal("val"),
    value: z.lazy(() => TestMsgSchema),
  }),
});

/**
 * @generated from message tests.harness.cases.MessageWith3dInside
 */
export const MessageWith3dInsideSchema = z.object({
});

