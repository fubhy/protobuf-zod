import { z } from "zod";
import isEmail from "validator/es/lib/isEmail";
import isIP from "validator/es/lib/isIP";
import isURL from "validator/es/lib/isURL";
import isUUID from "validator/es/lib/isUUID";

function parseOrReport<TSchema extends z.ZodTypeAny>(
  value: unknown,
  schema: TSchema,
  ctx: z.RefinementCtx
): z.output<TSchema> {
  const result = schema.safeParse(value);

  if (!result.success) {
    for (const issue of result.error.issues) {
      ctx.addIssue({ ...issue, path: ctx.path.concat(issue.path) });
    }

    return z.NEVER;
  }

  return result.data;
}

export function transform<TSchema extends z.ZodTypeAny>(schema: TSchema) {
  return (value: unknown, ctx: z.RefinementCtx) => parseOrReport(value, schema, ctx);
}

export function oneof<
  TValue extends z.Primitive,
  TTypes extends [
    z.ZodDiscriminatedUnionOption<"case", TValue>,
    z.ZodDiscriminatedUnionOption<"case", TValue>,
    ...z.ZodDiscriminatedUnionOption<"case", TValue>[]
  ]
>(types: TTypes) {
  type CaseOrEmpty = TValue | undefined | null;
  type WithEmptyCase = [z.ZodDiscriminatedUnionOption<"case", CaseOrEmpty>, TTypes[0], ...TTypes[number][]];

  return z.discriminatedUnion<"case", CaseOrEmpty, WithEmptyCase>("case", types).transform((value) => {
    if ((value.case ?? undefined) === undefined) {
      return undefined;
    }

    return value;
  });
}

export function map<TKey extends z.ZodTypeAny, TValue extends z.ZodTypeAny>(key: TKey, value: TValue) {
  return z.preprocess((value) => {
    if (value instanceof Map) {
      return value;
    }

    if (value && typeof value === "object" && !Array.isArray(value)) {
      return new Map(Object.entries(value));
    }

    return value;
  }, z.map(key, value));
}

export const UINT64_MIN = BigInt("0");
export const UINT64_MAX = BigInt("18446744073709551615");

export const INT64_MIN = BigInt("-9223372036854775808");
export const INT64_MAX = BigInt("9223372036854775807");

export const INT32_MAX = 0x7fffffff;
export const INT32_MIN = -0x80000000;

export const UINT32_MIN = 0;
export const UINT32_MAX = 0xffffffff;

export const FLOAT32_MAX = 3.4e38;
export const FLOAT32_MIN = -3.4e38;

export const FLOAT64_MAX = 1.7e308;
export const FLOAT64_MIN = -1.7e308;

export const bigintish = z
  .bigint()
  .or(z.union([z.string().regex(/^-?[0-9]+$/), z.number().int()]).transform((value) => BigInt(value)));

function bigIntWithRange(min: bigint, max: bigint) {
  return bigintish.refine((inner: bigint) => inner >= min && inner <= max, {
    message: `Must be between ${min} and ${max}`,
  });
}

export const uint64 = bigIntWithRange(UINT64_MIN, UINT64_MAX);
export const int64 = bigIntWithRange(INT64_MIN, INT64_MAX);

export const uint32 = z.number().int().gte(UINT32_MIN).lte(UINT32_MAX);
export const int32 = z.number().int().gte(INT32_MIN).lte(INT32_MAX);

export const float = z.number().gte(FLOAT32_MIN).lte(FLOAT32_MAX);
export const double = z.number().gte(FLOAT64_MIN).lte(FLOAT64_MAX);

export const sint32 = int32;
export const sfixed32 = int32;
export const fixed32 = uint32;
export const sint64 = int64;
export const sfixed64 = int64;
export const fixed64 = uint64;

export const bytes = z.instanceof(Uint8Array);

const encoder = new TextEncoder();
function toBytes(value: Uint8Array | string) {
  if (typeof value === "string") {
    return encoder.encode(value);
  }

  return value;
}

const decoder = new TextDecoder();
function bytesToUtf8(value: Uint8Array) {
  return decoder.decode(value);
}

export function bytesMatches(pattern: RegExp) {
  return (value: Uint8Array) => pattern.test(bytesToUtf8(value));
}

export function bytesEquals(outer: Uint8Array) {
  return (value: Uint8Array) => bytesEqualsInternal(outer, value);
}

export function bytesLength(length: number) {
  return (value: Uint8Array | string) => toBytes(value).byteLength === length;
}

export function bytesMinLength(length: number) {
  return (value: Uint8Array | string) => toBytes(value).byteLength >= length;
}

export function bytesMaxLength(length: number) {
  return (value: Uint8Array | string) => toBytes(value).byteLength <= length;
}

export function bytesContains(slice: Uint8Array) {
  const hex = bytesToHex(slice);
  return (value: Uint8Array) => bytesToHex(value).includes(hex);
}

export function bytesStartsWith(prefix: Uint8Array) {
  const hex = bytesToHex(prefix);
  return (value: Uint8Array) => bytesToHex(value).startsWith(hex);
}

export function bytesEndsWith(suffix: Uint8Array) {
  const hex = bytesToHex(suffix);
  return (value: Uint8Array) => bytesToHex(value).endsWith(hex);
}

export function bytesIsIn(list: Uint8Array[]) {
  return (value: Uint8Array) => list.some((inner) => bytesEqualsInternal(value, inner));
}

export function bytesIsNotIn(list: Uint8Array[]) {
  return (value: Uint8Array) => !list.some((inner) => bytesEqualsInternal(value, inner));
}

function bytesToIp(value: Uint8Array): string | undefined {
  // IPv4
  if (value.length === 4) {
    const result: string[] = [];

    for (const item of value) {
      result.push(`${item}`);
    }

    return result.join(".");
  }

  // IPv6
  if (value.length === 16) {
    const view = new DataView(value.buffer);
    const result: string[] = [];

    for (let i = 0; i < value.length; i += 2) {
      result.push(view.getUint16(i).toString(16));
    }

    return result
      .join(":")
      .replace(/(^|:)0(:0)*:0(:|$)/, "$1::$3")
      .replace(/:{3,4}/, "::");
  }

  return undefined;
}

export function bytesIsIp(version?: 4 | 6) {
  return (value: Uint8Array) => {
    const ip = bytesToIp(value);
    return ip !== undefined && isIP(ip, version);
  };
}

function bytesEqualsInternal(a: Uint8Array, b: Uint8Array) {
  return a.byteLength === b.byteLength && a.every((value, index) => value == b[index]);
}

function bytesToHex(value: Uint8Array) {
  return [...value].map((x) => x.toString(16).padStart(2, "0")).join("");
}

export function isUniqueList() {
  return (list: any[]) => !list.some((item, index, array) => array.indexOf(item) !== index);
}

export function isNotIn(list: any[]) {
  return (value: any) => !list.includes(value);
}

export function isIn(list: any[]) {
  return (value: any) => list.includes(value);
}

type NumberOrBigint = bigint | number;
type OneOfNumberOrBigint<TType extends NumberOrBigint> = TType extends number ? number : bigint;

export function numberGt<TType extends NumberOrBigint>(outer: TType) {
  return (value: OneOfNumberOrBigint<TType>) => value > outer;
}

export function numberGte<TType extends NumberOrBigint>(outer: TType) {
  return (value: OneOfNumberOrBigint<TType>) => value >= outer;
}

export function numberLte<TType extends NumberOrBigint>(outer: TType) {
  return (value: OneOfNumberOrBigint<TType>) => value <= outer;
}

export function numberLt<TType extends NumberOrBigint>(outer: TType) {
  return (value: OneOfNumberOrBigint<TType>) => value < outer;
}

export function numberInsideGtLt<TType extends NumberOrBigint>(gt: TType, lt: TType) {
  return (value: OneOfNumberOrBigint<TType>) => value > gt && value < lt;
}

export function numberOutsideGtLt<TType extends NumberOrBigint>(gt: TType, lt: TType) {
  return (value: OneOfNumberOrBigint<TType>) => value < lt || value > gt;
}

export function numberInsideGteLt<TType extends NumberOrBigint>(gte: TType, lt: TType) {
  return (value: OneOfNumberOrBigint<TType>) => value >= gte && value < lt;
}

export function numberOutsideGteLt<TType extends NumberOrBigint>(gte: TType, lt: TType) {
  return (value: OneOfNumberOrBigint<TType>) => value < lt || value >= gte;
}

export function numberInsideGtLte<TType extends NumberOrBigint>(gt: TType, lte: TType) {
  return (value: OneOfNumberOrBigint<TType>) => value > gt && value <= lte;
}

export function numberOutsideGtLte<TType extends NumberOrBigint>(gt: TType, lte: TType) {
  return (value: OneOfNumberOrBigint<TType>) => value <= lte || value > gt;
}

export function numberInsideGteLte<TType extends NumberOrBigint>(gte: TType, lte: TType) {
  return (value: OneOfNumberOrBigint<TType>) => value >= gte && value <= lte;
}

export function numberOutsideGteLte<TType extends NumberOrBigint>(gte: TType, lte: TType) {
  return (value: OneOfNumberOrBigint<TType>) => value <= lte || value >= gte;
}

export function floatEquals(constant: number) {
  return (value: number) => Math.fround(value) === constant;
}

export function floatIsNotIn(list: number[]) {
  return (value: number) => !list.includes(Math.fround(value));
}

export function floatIsIn(list: number[]) {
  return (value: number) => list.includes(Math.fround(value));
}

export function stringContains(subset: string) {
  return (value: string) => value.includes(subset);
}

export function stringNotContains(subset: string) {
  return (value: string) => !value.includes(subset);
}

function validateHostname(value: string) {
  if (!value) {
    return false;
  }
  if (value.length > 253) {
    return false;
  }

  if (value.endsWith(".")) {
    value = value.substring(0, value.length - 1);
  }

  for (const part of value.split(".")) {
    if (part.length === 0 || part.length > 63) {
      return false;
    }

    // Host names cannot begin or end with hyphens
    if (part.startsWith("-") || part.endsWith("-")) {
      return false;
    }
    for (const r of part) {
      if ((r < "A" || r > "Z") && (r < "a" || r > "z") && (r < "0" || r > "9") && r !== "-") {
        return false;
      }
    }
  }
  return true;
}

function validateEmail(value: string) {
  let address = value;
  if (address.includes("<") && address.includes(">")) {
    address = address.split("<")[1]!.split(">")[0]!;
  }

  if (!isEmail(address)) {
    return false;
  }

  if (address.length > 254) {
    return false;
  }

  const [username = "", hostname = ""] = address.split("@");
  if (username.length > 64) {
    return false;
  }

  return validateHostname(hostname);
}

export function stringIsEmail() {
  return (value: string) => validateEmail(value);
}

export function stringIsHostname() {
  return (value: string) => validateHostname(value);
}

export function stringIsAddress() {
  return (value: string) => isIP(value) || validateHostname(value);
}

export function stringIsIp(version?: 4 | 6) {
  return (value: string) => isIP(value, version);
}

export function stringIsUrl(absolute = true) {
  return (value: string) => isURL(value, { require_host: absolute });
}

export function stringIsUuid() {
  return (value: string) => isUUID(value);
}

export function stringIsHttpHeaderName(strict = true) {
  return (value: string) => {
    if (strict) {
      return /^:?[0-9a-zA-Z!#$%&'*+-.^_|~\x60]+$/.test(value);
    }

    // eslint-disable-next-line no-control-regex
    return /^[^\u0000\u000A\u000D]*$/.test(value);
  };
}

export function stringIsHttpHeaderValue(strict = true) {
  return (value: string) => {
    if (strict) {
      // eslint-disable-next-line no-control-regex
      return /^[^\u0000-\u0008\u000A-\u001F\u007F]*$/.test(value);
    }

    // eslint-disable-next-line no-control-regex
    return /^[^\u0000\u000A\u000D]*$/.test(value);
  };
}
