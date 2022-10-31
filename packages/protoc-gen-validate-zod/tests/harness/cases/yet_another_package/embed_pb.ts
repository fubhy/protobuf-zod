// @generated by protoc-gen-es v0.2.1 with parameter "target=ts"
// @generated from file tests/harness/cases/yet_another_package/embed.proto (package tests.harness.cases.yet_another_package, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Validate message embedding across packages.
 *
 * @generated from message tests.harness.cases.yet_another_package.Embed
 */
export class Embed extends Message<Embed> {
  /**
   * @generated from field: int64 val = 1;
   */
  val = protoInt64.zero;

  constructor(data?: PartialMessage<Embed>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tests.harness.cases.yet_another_package.Embed";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Embed {
    return new Embed().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Embed {
    return new Embed().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Embed {
    return new Embed().fromJsonString(jsonString, options);
  }

  static equals(a: Embed | PlainMessage<Embed> | undefined, b: Embed | PlainMessage<Embed> | undefined): boolean {
    return proto3.util.equals(Embed, a, b);
  }
}

/**
 * @generated from enum tests.harness.cases.yet_another_package.Embed.Enumerated
 */
export enum Embed_Enumerated {
  /**
   * @generated from enum value: VALUE = 0;
   */
  VALUE = 0,
}
// Retrieve enum metadata with: proto3.getEnumType(Embed_Enumerated)
proto3.util.setEnumType(Embed_Enumerated, "tests.harness.cases.yet_another_package.Embed.Enumerated", [
  { no: 0, name: "VALUE" },
]);
