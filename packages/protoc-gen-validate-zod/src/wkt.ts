import { codegenInfo } from "@bufbuild/protobuf";
import { getMapSchema } from "./map.js";
import { getScalarSchema } from "./scalar.js";
import { GeneratedFile } from "./utils.js";
import { FieldRules } from "./generated/validate_pb.js";
import { hasRulesFor } from "./rules.js";
import { Printable } from "@bufbuild/protoplugin/ecmascript";

// TODO: This should probably be exported from @bufbuild/protobuf
export type DescWkt = NonNullable<ReturnType<typeof codegenInfo.reifyWkt>>;

export function getWktSchema(f: GeneratedFile, wkt: DescWkt, rules?: FieldRules) {
  switch (wkt.typeName) {
    case "google.protobuf.Any":
      return [f.zod, ".any()"];
    case "google.protobuf.Timestamp": {
      const typing: Printable[] = [f.wkt.timestamp];
      if (hasRulesFor("timestamp", rules)) {
        if (rules.type.value.gt !== undefined) {
          typing.push(f.validate.timestampIsConst(rules.type.value.const.seconds, rules.type.value.const.nanos));
        }

        if (rules.type.value.const !== undefined) {
          typing.push(f.validate.timestampIsConst(rules.type.value.const.seconds, rules.type.value.const.nanos));
        }
      }

      return typing;
    }
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
