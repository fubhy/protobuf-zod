// @generated by protoc-gen-es v0.2.1 with parameter "target=ts"
// @generated from file tests/harness/cases/enums.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import {Embed_DoubleEmbed_DoubleEnumerated, Embed_Enumerated} from "./other_package/embed_pb.js";
import {Embed_Enumerated as Embed_Enumerated$1} from "./yet_another_package/embed_pb.js";

/**
 * @generated from enum tests.harness.cases.TestEnum
 */
export enum TestEnum {
  /**
   * @generated from enum value: ZERO = 0;
   */
  ZERO = 0,

  /**
   * @generated from enum value: ONE = 1;
   */
  ONE = 1,

  /**
   * @generated from enum value: TWO = 2;
   */
  TWO = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(TestEnum)
proto3.util.setEnumType(TestEnum, "tests.harness.cases.TestEnum", [
  { no: 0, name: "ZERO" },
  { no: 1, name: "ONE" },
  { no: 2, name: "TWO" },
]);

/**
 * @generated from enum tests.harness.cases.TestEnumAlias
 */
export enum TestEnumAlias {
  /**
   * @generated from enum value: A = 0;
   */
  A = 0,

  /**
   * @generated from enum value: B = 1;
   */
  B = 1,

  /**
   * @generated from enum value: C = 2;
   */
  C = 2,

  /**
   * @generated from enum value: ALPHA = 0;
   */
  ALPHA = 0,

  /**
   * @generated from enum value: BETA = 1;
   */
  BETA = 1,

  /**
   * @generated from enum value: GAMMA = 2;
   */
  GAMMA = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(TestEnumAlias)
proto3.util.setEnumType(TestEnumAlias, "tests.harness.cases.TestEnumAlias", [
  { no: 0, name: "A" },
  { no: 1, name: "B" },
  { no: 2, name: "C" },
  { no: 0, name: "ALPHA" },
  { no: 1, name: "BETA" },
  { no: 2, name: "GAMMA" },
]);

/**
 * @generated from message tests.harness.cases.EnumNone
 */
export class EnumNone extends Message<EnumNone> {
  /**
   * @generated from field: tests.harness.cases.TestEnum val = 1;
   */
  val = TestEnum.ZERO;

  constructor(data?: PartialMessage<EnumNone>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.EnumNone";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(TestEnum) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumNone {
    return new EnumNone().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumNone {
    return new EnumNone().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumNone {
    return new EnumNone().fromJsonString(jsonString, options);
  }

  static equals(a: EnumNone | PlainMessage<EnumNone> | undefined, b: EnumNone | PlainMessage<EnumNone> | undefined): boolean {
    return proto3.util.equals(EnumNone, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.EnumConst
 */
export class EnumConst extends Message<EnumConst> {
  /**
   * @generated from field: tests.harness.cases.TestEnum val = 1;
   */
  val = TestEnum.ZERO;

  constructor(data?: PartialMessage<EnumConst>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.EnumConst";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(TestEnum) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumConst {
    return new EnumConst().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumConst {
    return new EnumConst().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumConst {
    return new EnumConst().fromJsonString(jsonString, options);
  }

  static equals(a: EnumConst | PlainMessage<EnumConst> | undefined, b: EnumConst | PlainMessage<EnumConst> | undefined): boolean {
    return proto3.util.equals(EnumConst, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.EnumAliasConst
 */
export class EnumAliasConst extends Message<EnumAliasConst> {
  /**
   * @generated from field: tests.harness.cases.TestEnumAlias val = 1;
   */
  val = TestEnumAlias.A;

  constructor(data?: PartialMessage<EnumAliasConst>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.EnumAliasConst";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(TestEnumAlias) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumAliasConst {
    return new EnumAliasConst().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumAliasConst {
    return new EnumAliasConst().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumAliasConst {
    return new EnumAliasConst().fromJsonString(jsonString, options);
  }

  static equals(a: EnumAliasConst | PlainMessage<EnumAliasConst> | undefined, b: EnumAliasConst | PlainMessage<EnumAliasConst> | undefined): boolean {
    return proto3.util.equals(EnumAliasConst, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.EnumDefined
 */
export class EnumDefined extends Message<EnumDefined> {
  /**
   * @generated from field: tests.harness.cases.TestEnum val = 1;
   */
  val = TestEnum.ZERO;

  constructor(data?: PartialMessage<EnumDefined>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.EnumDefined";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(TestEnum) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumDefined {
    return new EnumDefined().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumDefined {
    return new EnumDefined().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumDefined {
    return new EnumDefined().fromJsonString(jsonString, options);
  }

  static equals(a: EnumDefined | PlainMessage<EnumDefined> | undefined, b: EnumDefined | PlainMessage<EnumDefined> | undefined): boolean {
    return proto3.util.equals(EnumDefined, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.EnumAliasDefined
 */
export class EnumAliasDefined extends Message<EnumAliasDefined> {
  /**
   * @generated from field: tests.harness.cases.TestEnumAlias val = 1;
   */
  val = TestEnumAlias.A;

  constructor(data?: PartialMessage<EnumAliasDefined>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.EnumAliasDefined";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(TestEnumAlias) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumAliasDefined {
    return new EnumAliasDefined().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumAliasDefined {
    return new EnumAliasDefined().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumAliasDefined {
    return new EnumAliasDefined().fromJsonString(jsonString, options);
  }

  static equals(a: EnumAliasDefined | PlainMessage<EnumAliasDefined> | undefined, b: EnumAliasDefined | PlainMessage<EnumAliasDefined> | undefined): boolean {
    return proto3.util.equals(EnumAliasDefined, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.EnumIn
 */
export class EnumIn extends Message<EnumIn> {
  /**
   * @generated from field: tests.harness.cases.TestEnum val = 1;
   */
  val = TestEnum.ZERO;

  constructor(data?: PartialMessage<EnumIn>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.EnumIn";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(TestEnum) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumIn {
    return new EnumIn().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumIn {
    return new EnumIn().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumIn {
    return new EnumIn().fromJsonString(jsonString, options);
  }

  static equals(a: EnumIn | PlainMessage<EnumIn> | undefined, b: EnumIn | PlainMessage<EnumIn> | undefined): boolean {
    return proto3.util.equals(EnumIn, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.EnumAliasIn
 */
export class EnumAliasIn extends Message<EnumAliasIn> {
  /**
   * @generated from field: tests.harness.cases.TestEnumAlias val = 1;
   */
  val = TestEnumAlias.A;

  constructor(data?: PartialMessage<EnumAliasIn>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.EnumAliasIn";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(TestEnumAlias) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumAliasIn {
    return new EnumAliasIn().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumAliasIn {
    return new EnumAliasIn().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumAliasIn {
    return new EnumAliasIn().fromJsonString(jsonString, options);
  }

  static equals(a: EnumAliasIn | PlainMessage<EnumAliasIn> | undefined, b: EnumAliasIn | PlainMessage<EnumAliasIn> | undefined): boolean {
    return proto3.util.equals(EnumAliasIn, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.EnumNotIn
 */
export class EnumNotIn extends Message<EnumNotIn> {
  /**
   * @generated from field: tests.harness.cases.TestEnum val = 1;
   */
  val = TestEnum.ZERO;

  constructor(data?: PartialMessage<EnumNotIn>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.EnumNotIn";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(TestEnum) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumNotIn {
    return new EnumNotIn().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumNotIn {
    return new EnumNotIn().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumNotIn {
    return new EnumNotIn().fromJsonString(jsonString, options);
  }

  static equals(a: EnumNotIn | PlainMessage<EnumNotIn> | undefined, b: EnumNotIn | PlainMessage<EnumNotIn> | undefined): boolean {
    return proto3.util.equals(EnumNotIn, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.EnumAliasNotIn
 */
export class EnumAliasNotIn extends Message<EnumAliasNotIn> {
  /**
   * @generated from field: tests.harness.cases.TestEnumAlias val = 1;
   */
  val = TestEnumAlias.A;

  constructor(data?: PartialMessage<EnumAliasNotIn>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.EnumAliasNotIn";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(TestEnumAlias) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumAliasNotIn {
    return new EnumAliasNotIn().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumAliasNotIn {
    return new EnumAliasNotIn().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumAliasNotIn {
    return new EnumAliasNotIn().fromJsonString(jsonString, options);
  }

  static equals(a: EnumAliasNotIn | PlainMessage<EnumAliasNotIn> | undefined, b: EnumAliasNotIn | PlainMessage<EnumAliasNotIn> | undefined): boolean {
    return proto3.util.equals(EnumAliasNotIn, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.EnumExternal
 */
export class EnumExternal extends Message<EnumExternal> {
  /**
   * @generated from field: tests.harness.cases.other_package.Embed.Enumerated val = 1;
   */
  val = Embed_Enumerated.VALUE;

  constructor(data?: PartialMessage<EnumExternal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.EnumExternal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(Embed_Enumerated) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumExternal {
    return new EnumExternal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumExternal {
    return new EnumExternal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumExternal {
    return new EnumExternal().fromJsonString(jsonString, options);
  }

  static equals(a: EnumExternal | PlainMessage<EnumExternal> | undefined, b: EnumExternal | PlainMessage<EnumExternal> | undefined): boolean {
    return proto3.util.equals(EnumExternal, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.EnumExternal2
 */
export class EnumExternal2 extends Message<EnumExternal2> {
  /**
   * @generated from field: tests.harness.cases.other_package.Embed.DoubleEmbed.DoubleEnumerated val = 1;
   */
  val = Embed_DoubleEmbed_DoubleEnumerated.VALUE;

  constructor(data?: PartialMessage<EnumExternal2>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.EnumExternal2";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(Embed_DoubleEmbed_DoubleEnumerated) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumExternal2 {
    return new EnumExternal2().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumExternal2 {
    return new EnumExternal2().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumExternal2 {
    return new EnumExternal2().fromJsonString(jsonString, options);
  }

  static equals(a: EnumExternal2 | PlainMessage<EnumExternal2> | undefined, b: EnumExternal2 | PlainMessage<EnumExternal2> | undefined): boolean {
    return proto3.util.equals(EnumExternal2, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.RepeatedEnumDefined
 */
export class RepeatedEnumDefined extends Message<RepeatedEnumDefined> {
  /**
   * @generated from field: repeated tests.harness.cases.TestEnum val = 1;
   */
  val: TestEnum[] = [];

  constructor(data?: PartialMessage<RepeatedEnumDefined>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.RepeatedEnumDefined";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(TestEnum), repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RepeatedEnumDefined {
    return new RepeatedEnumDefined().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RepeatedEnumDefined {
    return new RepeatedEnumDefined().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RepeatedEnumDefined {
    return new RepeatedEnumDefined().fromJsonString(jsonString, options);
  }

  static equals(a: RepeatedEnumDefined | PlainMessage<RepeatedEnumDefined> | undefined, b: RepeatedEnumDefined | PlainMessage<RepeatedEnumDefined> | undefined): boolean {
    return proto3.util.equals(RepeatedEnumDefined, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.RepeatedExternalEnumDefined
 */
export class RepeatedExternalEnumDefined extends Message<RepeatedExternalEnumDefined> {
  /**
   * @generated from field: repeated tests.harness.cases.other_package.Embed.Enumerated val = 1;
   */
  val: Embed_Enumerated[] = [];

  constructor(data?: PartialMessage<RepeatedExternalEnumDefined>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.RepeatedExternalEnumDefined";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(Embed_Enumerated), repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RepeatedExternalEnumDefined {
    return new RepeatedExternalEnumDefined().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RepeatedExternalEnumDefined {
    return new RepeatedExternalEnumDefined().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RepeatedExternalEnumDefined {
    return new RepeatedExternalEnumDefined().fromJsonString(jsonString, options);
  }

  static equals(a: RepeatedExternalEnumDefined | PlainMessage<RepeatedExternalEnumDefined> | undefined, b: RepeatedExternalEnumDefined | PlainMessage<RepeatedExternalEnumDefined> | undefined): boolean {
    return proto3.util.equals(RepeatedExternalEnumDefined, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.RepeatedYetAnotherExternalEnumDefined
 */
export class RepeatedYetAnotherExternalEnumDefined extends Message<RepeatedYetAnotherExternalEnumDefined> {
  /**
   * @generated from field: repeated tests.harness.cases.yet_another_package.Embed.Enumerated val = 1;
   */
  val: Embed_Enumerated$1[] = [];

  constructor(data?: PartialMessage<RepeatedYetAnotherExternalEnumDefined>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.RepeatedYetAnotherExternalEnumDefined";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(Embed_Enumerated$1), repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RepeatedYetAnotherExternalEnumDefined {
    return new RepeatedYetAnotherExternalEnumDefined().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RepeatedYetAnotherExternalEnumDefined {
    return new RepeatedYetAnotherExternalEnumDefined().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RepeatedYetAnotherExternalEnumDefined {
    return new RepeatedYetAnotherExternalEnumDefined().fromJsonString(jsonString, options);
  }

  static equals(a: RepeatedYetAnotherExternalEnumDefined | PlainMessage<RepeatedYetAnotherExternalEnumDefined> | undefined, b: RepeatedYetAnotherExternalEnumDefined | PlainMessage<RepeatedYetAnotherExternalEnumDefined> | undefined): boolean {
    return proto3.util.equals(RepeatedYetAnotherExternalEnumDefined, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.MapEnumDefined
 */
export class MapEnumDefined extends Message<MapEnumDefined> {
  /**
   * @generated from field: map<string, tests.harness.cases.TestEnum> val = 1;
   */
  val: { [key: string]: TestEnum } = {};

  constructor(data?: PartialMessage<MapEnumDefined>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.MapEnumDefined";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "enum", T: proto3.getEnumType(TestEnum)} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MapEnumDefined {
    return new MapEnumDefined().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MapEnumDefined {
    return new MapEnumDefined().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MapEnumDefined {
    return new MapEnumDefined().fromJsonString(jsonString, options);
  }

  static equals(a: MapEnumDefined | PlainMessage<MapEnumDefined> | undefined, b: MapEnumDefined | PlainMessage<MapEnumDefined> | undefined): boolean {
    return proto3.util.equals(MapEnumDefined, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.MapExternalEnumDefined
 */
export class MapExternalEnumDefined extends Message<MapExternalEnumDefined> {
  /**
   * @generated from field: map<string, tests.harness.cases.other_package.Embed.Enumerated> val = 1;
   */
  val: { [key: string]: Embed_Enumerated } = {};

  constructor(data?: PartialMessage<MapExternalEnumDefined>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.MapExternalEnumDefined";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "enum", T: proto3.getEnumType(Embed_Enumerated)} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MapExternalEnumDefined {
    return new MapExternalEnumDefined().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MapExternalEnumDefined {
    return new MapExternalEnumDefined().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MapExternalEnumDefined {
    return new MapExternalEnumDefined().fromJsonString(jsonString, options);
  }

  static equals(a: MapExternalEnumDefined | PlainMessage<MapExternalEnumDefined> | undefined, b: MapExternalEnumDefined | PlainMessage<MapExternalEnumDefined> | undefined): boolean {
    return proto3.util.equals(MapExternalEnumDefined, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.EnumInsideOneOf
 */
export class EnumInsideOneOf extends Message<EnumInsideOneOf> {
  /**
   * @generated from oneof tests.harness.cases.EnumInsideOneOf.foo
   */
  foo: {
    /**
     * @generated from field: tests.harness.cases.TestEnum val = 1;
     */
    value: TestEnum;
    case: "val";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from oneof tests.harness.cases.EnumInsideOneOf.bar
   */
  bar: {
    /**
     * @generated from field: tests.harness.cases.TestEnum val2 = 2;
     */
    value: TestEnum;
    case: "val2";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<EnumInsideOneOf>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.EnumInsideOneOf";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "enum", T: proto3.getEnumType(TestEnum), oneof: "foo" },
    { no: 2, name: "val2", kind: "enum", T: proto3.getEnumType(TestEnum), oneof: "bar" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumInsideOneOf {
    return new EnumInsideOneOf().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumInsideOneOf {
    return new EnumInsideOneOf().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumInsideOneOf {
    return new EnumInsideOneOf().fromJsonString(jsonString, options);
  }

  static equals(a: EnumInsideOneOf | PlainMessage<EnumInsideOneOf> | undefined, b: EnumInsideOneOf | PlainMessage<EnumInsideOneOf> | undefined): boolean {
    return proto3.util.equals(EnumInsideOneOf, a, b);
  }
}

