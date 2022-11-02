import type { DescEnum, DescField, DescFile, DescMessage } from "@bufbuild/protobuf";
import { ScalarType } from "@bufbuild/protobuf";
import {
  GeneratedFile as GeneratedFileBase,
  ImportSymbol,
  literalString,
  Printable,
  Schema,
} from "@bufbuild/protoplugin/ecmascript";
import { localName, createJsDocBlock, makeJsDoc } from "@bufbuild/protoplugin/ecmascript";
import { FieldRules } from "./generated/validate_pb.js";

type NumberOrBigint = number | bigint;

type RuntimeExports = typeof import("protobuf-zod");
type RuntimeExportsKeys = keyof RuntimeExports;
type RuntimeRefinementExports = {
  // eslint-disable-next-line no-unused-vars
  [TKey in RuntimeExportsKeys]: RuntimeExports[TKey] extends (...args: any) => (...args: any) => boolean ? TKey : never;
}[RuntimeExportsKeys];

export function makeJsDocWithRules(desc: DescField, rules?: FieldRules, disabled = false, indentation = ""): Printable {
  const docs = makeJsDoc(desc, indentation) as Printable[];
  if (!rules) {
    return docs;
  }

  const annotation = `@validate ${disabled ? "(disabled) " : ""} ${rules.toJsonString()}`;
  const suffix = createJsDocBlock(annotation, indentation) as Printable[];
  return [...docs.slice(0, -1), ...suffix.slice(1)];
}

export function createFile(schema: Schema, file: DescFile): GeneratedFile {
  const f = schema.generateFile(`${file.name}_zod.ts`) as GeneratedFile;
  Object.assign(f, createGeneratorUtils(f));

  return f;
}

export type GeneratedFile = GeneratedFileBase & ReturnType<typeof createGeneratorUtils>;

export function createGeneratorUtils(f: GeneratedFileBase) {
  const zod = f.import("z", "zod");

  const args = (values: Printable[]): Printable => values.flatMap((value) => [value, ", "]).slice(0, -1);
  const union = (values: Printable[]): Printable => [zod, ".union(", array(values), ")"];
  const lazy = (symbol: ImportSymbol): Printable => [zod, ".lazy(() => ", symbol, ")"];
  const and = (values: Printable): Printable => [".and(", values, ")"];
  const or = (values: Printable): Printable => [".or(", values, ")"];

  const literal = (value: Printable | undefined | null): Printable => {
    const thing =
      typeof value === "string" ? literalString(value) : value === undefined || value === null ? `${value}` : value;

    return [zod, ".literal(", thing, ")"];
  };

  const array = (value: Printable, indentation = "  "): Printable => {
    const array = Array.isArray(value) ? value : [value];
    const items = array.flatMap((value) => [indentation, "  ", value, ",\n"]);
    return ["[\n", items, indentation, "]"];
  };

  const runtime = (name: RuntimeExportsKeys) => f.import(name, "protobuf-zod");
  const refine = <TExport extends RuntimeRefinementExports>(
    fn: TExport,
    args?: Printable,
    message?: string
  ): Printable => {
    const refinement: Printable[] = [runtime(fn), "(", ...(args === undefined ? [] : [args]), ")"];

    if (message !== undefined) {
      refinement.push([", ", literalString(message)]);
    }

    return [".refine(", refinement, ")"];
  };

  return {
    zod,
    lazy,
    and,
    or,
    literal,
    union,
    array,
    runtime,
    oneof: (cases: Printable[]) => [runtime("oneof"), "(", array(cases), ")"],
    transform: (value: Printable) => [runtime("transform"), "(", value, ")"],
    reference: (desc: DescEnum | DescMessage) => {
      // NOTE: This should ideally use a registry based on `f.export`, etc. but that seems to not work reliably accross package boundaries.
      const name = `${localName(desc)}Schema`;
      return f.import(name, `./${desc.file.name}_zod.js`);
    },
    scalars: {
      [ScalarType.STRING]: [zod, ".string()"],
      [ScalarType.BOOL]: [zod, ".boolean()"],
      [ScalarType.BYTES]: runtime("bytes"),
      [ScalarType.UINT64]: runtime("uint64"),
      [ScalarType.INT64]: runtime("int64"),
      [ScalarType.UINT32]: runtime("uint32"),
      [ScalarType.INT32]: runtime("int32"),
      [ScalarType.FLOAT]: runtime("float"),
      [ScalarType.DOUBLE]: runtime("double"),
      [ScalarType.SINT32]: runtime("sint32"),
      [ScalarType.SFIXED32]: runtime("sfixed32"),
      [ScalarType.FIXED32]: runtime("fixed32"),
      [ScalarType.SINT64]: runtime("sint64"),
      [ScalarType.SFIXED64]: runtime("sfixed64"),
      [ScalarType.FIXED64]: runtime("fixed64"),
    },
    validate: {
      bytesEquals: (value: Uint8Array) => refine("bytesEquals", value),
      bytesContains: (value: Uint8Array) => refine("bytesContains", value),
      bytesStartsWith: (value: Uint8Array) => refine("bytesStartsWith", value),
      bytesEndsWith: (value: Uint8Array) => refine("bytesEndsWith", value),
      bytesLength: (value: NumberOrBigint) => refine("bytesLength", Number(value)),
      bytesMaxLength: (value: NumberOrBigint) => refine("bytesMaxLength", Number(value)),
      bytesMinLength: (value: NumberOrBigint) => refine("bytesMinLength", Number(value)),
      bytesIsIn: (values: Uint8Array[]) => refine("bytesIsIn", array(values)),
      bytesIsNotIn: (values: Uint8Array[]) => refine("bytesIsNotIn", array(values)),
      isUniqueList: () => refine("isUniqueList"),
      isIn: (values: Printable[]) => refine("isIn", array(values)),
      isNotIn: (values: Printable[]) => refine("isNotIn", array(values)),
      stringContains: (value: string) => refine("stringContains", literalString(value)),
      stringNotContains: (value: string) => refine("stringNotContains", literalString(value)),
      stringIsEmail: () => refine("stringIsEmail"),
      stringIsHostname: () => refine("stringIsHostname"),
      stringIsAddress: () => refine("stringIsAddress"),
      stringIsUrl: (absolute = true) => refine("stringIsUrl", absolute),
      stringIsUuid: () => refine("stringIsUuid"),
      stringIsIp: (version?: 4 | 6) => refine("stringIsIp", version),
      stringIsHttpHeaderName: (strict = true) => refine("stringIsHttpHeaderName", strict),
      stringIsHttpHeaderValue: (strict = true) => refine("stringIsHttpHeaderValue", strict),
      stringMatches: (pattern: string) => {
        try {
          new RegExp(pattern);

          return [".regex(new RegExp(", literalString(pattern), "))"];
        } catch {
          return [".regex(new RegExp(", literalString("invalid regular expression^"), "))"];
        }
      },
      isConst: (value: Printable) => and(literal(value)),
      numberGt: (value: NumberOrBigint) => refine("numberGt", value),
      numberGte: (value: NumberOrBigint) => refine("numberGte", value),
      numberLt: (value: NumberOrBigint) => refine("numberLt", value),
      numberLte: (value: NumberOrBigint) => refine("numberLte", value),
      numberInsideGtLt: (gt: NumberOrBigint, lt: NumberOrBigint) => refine("numberInsideGtLt", args([gt, lt])),
      numberOutsideGtLt: (gt: NumberOrBigint, lt: NumberOrBigint) => refine("numberOutsideGtLt", args([gt, lt])),
      numberInsideGteLt: (gte: NumberOrBigint, lt: NumberOrBigint) => refine("numberInsideGteLt", args([gte, lt])),
      numberOutsideGteLt: (gte: NumberOrBigint, lt: NumberOrBigint) => refine("numberOutsideGteLt", args([gte, lt])),
      numberInsideGtLte: (gt: NumberOrBigint, lte: NumberOrBigint) => refine("numberInsideGtLte", args([gt, lte])),
      numberOutsideGtLte: (gt: NumberOrBigint, lte: NumberOrBigint) => refine("numberOutsideGtLte", args([gt, lte])),
      numberInsideGteLte: (gte: NumberOrBigint, lte: NumberOrBigint) => refine("numberInsideGteLte", args([gte, lte])),
      numberOutsideGteLte: (gte: NumberOrBigint, lte: NumberOrBigint) =>
        refine("numberOutsideGteLte", args([gte, lte])),
    },
  };
}
