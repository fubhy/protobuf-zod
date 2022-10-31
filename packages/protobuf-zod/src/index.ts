import { z } from "zod";

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

const INVALID_REGEXP = new RegExp("invalid regular expression^");

export function regexp(pattern: string) {
  try {
    return new RegExp(pattern);
  } catch {
    return INVALID_REGEXP;
  }
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

export function stringContains(subset: string) {
  return (value: string) => value.includes(subset);
}

export function stringNotContains(subset: string) {
  return (value: string) => !value.includes(subset);
}