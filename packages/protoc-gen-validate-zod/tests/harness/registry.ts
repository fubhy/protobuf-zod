import * as protobuf from "@bufbuild/protobuf";
import { createRegistry, JsonValue, MessageType, EnumType, ServiceType } from "@bufbuild/protobuf";

import * as bool_zod from "./cases/bool_pb.js";
import * as numbers_zod from "./cases/numbers_pb.js";
import * as bytes_zod from "./cases/bytes_pb.js";
import * as enums_zod from "./cases/enums_pb.js";
import * as kitchen_sink_zod from "./cases/kitchen_sink_pb.js";
import * as maps_zod from "./cases/maps_pb.js";
import * as messages_zod from "./cases/messages_pb.js";
import * as oneofs_zod from "./cases/oneofs_pb.js";
import * as repeated_zod from "./cases/repeated_pb.js";
import * as strings_zod from "./cases/strings_pb.js";
import * as wkt_any_zod from "./cases/wkt_any_pb.js";
import * as wkt_duration_zod from "./cases/wkt_duration_pb.js";
import * as wkt_nested_zod from "./cases/wkt_nested_pb.js";
import * as wkt_timestamp_zod from "./cases/wkt_timestamp_pb.js";
import * as wkt_wrappers_zod from "./cases/wkt_wrappers_pb.js";

type AnyType = MessageType | EnumType | ServiceType;

function isProtoType(value: unknown): value is AnyType {
  if (typeof value === "function" && typeof (value as any).typeName === "string") {
    return true;
  }

  return false;
}

export const registry = createRegistry(
  ...([
    ...Object.values(bool_zod),
    ...Object.values(numbers_zod),
    ...Object.values(bytes_zod),
    ...Object.values(enums_zod),
    ...Object.values(kitchen_sink_zod),
    ...Object.values(maps_zod),
    ...Object.values(messages_zod),
    ...Object.values(oneofs_zod),
    ...Object.values(repeated_zod),
    ...Object.values(strings_zod),
    ...Object.values(wkt_any_zod),
    ...Object.values(wkt_duration_zod),
    ...Object.values(wkt_nested_zod),
    ...Object.values(wkt_timestamp_zod),
    ...Object.values(wkt_wrappers_zod),
    ...Object.values(protobuf),
  ].filter((item) => isProtoType(item)) as AnyType[])
);

export function unmarshal(name: string, json: JsonValue) {
  const type = registry.findMessage(name);
  if (type === undefined) {
    throw new Error(`Unknown message type ${type}`);
  }

  return type.fromJson(json, { typeRegistry: registry });
}
