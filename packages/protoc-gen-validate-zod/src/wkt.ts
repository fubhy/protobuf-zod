import { codegenInfo } from "@bufbuild/protobuf";
import { getMapSchema } from "./map.js";
import { getScalarSchema } from "./scalar.js";
import { GeneratedFile } from "./utils.js";
import { FieldRules } from "./validate.js";

// TODO: This should probably be exported from @bufbuild/protobuf
export type DescWkt = NonNullable<ReturnType<typeof codegenInfo.reifyWkt>>;

export function getWktSchema(f: GeneratedFile, wkt: DescWkt, rules?: FieldRules) {
  switch (wkt.typeName) {
    case "google.protobuf.Any":
      return [f.zod, ".any()"];
    case "google.protobuf.Timestamp":
      // TODO: Implement
      return [f.zod, ".any()"];
    case "google.protobuf.Duration":
      // TODO: Implement
      return [f.zod, ".any()"];
    case "google.protobuf.Struct":
      return getMapSchema(f, wkt.fields.mapKey, wkt.fields.mapValue, rules);
    case "google.protobuf.Value":
      // TODO: Implement
      return [f.zod, ".any()"];
    case "google.protobuf.ListValue":
      // TODO: Implement
      return [f.zod, ".any()"];
    case "google.protobuf.FieldMask":
      // TODO: Implement
      return [f.zod, ".any()"];
    case "google.protobuf.DoubleValue":
    case "google.protobuf.FloatValue":
    case "google.protobuf.Int64Value":
    case "google.protobuf.UInt64Value":
    case "google.protobuf.Int32Value":
    case "google.protobuf.UInt32Value":
    case "google.protobuf.BoolValue":
    case "google.protobuf.StringValue":
    case "google.protobuf.BytesValue": {
      return getScalarSchema(f, wkt.value.scalar, rules);
    }
  }
}
