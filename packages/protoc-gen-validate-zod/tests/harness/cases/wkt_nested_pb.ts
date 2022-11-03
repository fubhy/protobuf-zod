// @generated by protoc-gen-es v0.2.1 with parameter "target=ts"
// @generated from file tests/harness/cases/wkt_nested.proto (package tests.harness.cases, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message tests.harness.cases.WktLevelOne
 */
export class WktLevelOne extends Message<WktLevelOne> {
  /**
   * @generated from field: tests.harness.cases.WktLevelOne.WktLevelTwo two = 1;
   */
  two?: WktLevelOne_WktLevelTwo;

  constructor(data?: PartialMessage<WktLevelOne>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.WktLevelOne";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "two", kind: "message", T: WktLevelOne_WktLevelTwo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WktLevelOne {
    return new WktLevelOne().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WktLevelOne {
    return new WktLevelOne().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WktLevelOne {
    return new WktLevelOne().fromJsonString(jsonString, options);
  }

  static equals(a: WktLevelOne | PlainMessage<WktLevelOne> | undefined, b: WktLevelOne | PlainMessage<WktLevelOne> | undefined): boolean {
    return proto3.util.equals(WktLevelOne, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.WktLevelOne.WktLevelTwo
 */
export class WktLevelOne_WktLevelTwo extends Message<WktLevelOne_WktLevelTwo> {
  /**
   * @generated from field: tests.harness.cases.WktLevelOne.WktLevelTwo.WktLevelThree three = 1;
   */
  three?: WktLevelOne_WktLevelTwo_WktLevelThree;

  constructor(data?: PartialMessage<WktLevelOne_WktLevelTwo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.WktLevelOne.WktLevelTwo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "three", kind: "message", T: WktLevelOne_WktLevelTwo_WktLevelThree },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WktLevelOne_WktLevelTwo {
    return new WktLevelOne_WktLevelTwo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WktLevelOne_WktLevelTwo {
    return new WktLevelOne_WktLevelTwo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WktLevelOne_WktLevelTwo {
    return new WktLevelOne_WktLevelTwo().fromJsonString(jsonString, options);
  }

  static equals(a: WktLevelOne_WktLevelTwo | PlainMessage<WktLevelOne_WktLevelTwo> | undefined, b: WktLevelOne_WktLevelTwo | PlainMessage<WktLevelOne_WktLevelTwo> | undefined): boolean {
    return proto3.util.equals(WktLevelOne_WktLevelTwo, a, b);
  }
}

/**
 * @generated from message tests.harness.cases.WktLevelOne.WktLevelTwo.WktLevelThree
 */
export class WktLevelOne_WktLevelTwo_WktLevelThree extends Message<WktLevelOne_WktLevelTwo_WktLevelThree> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  constructor(data?: PartialMessage<WktLevelOne_WktLevelTwo_WktLevelThree>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.WktLevelOne.WktLevelTwo.WktLevelThree";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WktLevelOne_WktLevelTwo_WktLevelThree {
    return new WktLevelOne_WktLevelTwo_WktLevelThree().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WktLevelOne_WktLevelTwo_WktLevelThree {
    return new WktLevelOne_WktLevelTwo_WktLevelThree().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WktLevelOne_WktLevelTwo_WktLevelThree {
    return new WktLevelOne_WktLevelTwo_WktLevelThree().fromJsonString(jsonString, options);
  }

  static equals(a: WktLevelOne_WktLevelTwo_WktLevelThree | PlainMessage<WktLevelOne_WktLevelTwo_WktLevelThree> | undefined, b: WktLevelOne_WktLevelTwo_WktLevelThree | PlainMessage<WktLevelOne_WktLevelTwo_WktLevelThree> | undefined): boolean {
    return proto3.util.equals(WktLevelOne_WktLevelTwo_WktLevelThree, a, b);
  }
}

