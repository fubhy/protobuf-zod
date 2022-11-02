import { ScalarType } from "@bufbuild/protobuf";
import { literalString, Printable } from "@bufbuild/protoplugin/ecmascript";
import { hasRulesFor, hasRulesForScalar } from "./rules.js";
import { GeneratedFile } from "./utils.js";
import { FieldRules, KnownRegex } from "./generated/validate_pb.js";

export function getScalarSchema(f: GeneratedFile, scalar: ScalarType, rules?: FieldRules): Printable[] {
  let typing: Printable[] = [];

  switch (scalar) {
    case ScalarType.BOOL: {
      typing.push(f.scalars[ScalarType.BOOL]);

      if (hasRulesFor("bool", rules)) {
        if (rules.type.value.const !== undefined) {
          typing.push(f.validate.isConst(rules.type.value.const));
        }
      }

      break;
    }

    case ScalarType.BYTES: {
      typing.push(f.scalars[ScalarType.BYTES]);

      if (hasRulesFor("bytes", rules)) {
        if (rules.type.value.contains !== undefined) {
          typing.push(f.validate.bytesContains(rules.type.value.contains));
        }

        if (rules.type.value.prefix !== undefined) {
          typing.push(f.validate.bytesStartsWith(rules.type.value.prefix));
        }

        if (rules.type.value.suffix !== undefined) {
          typing.push(f.validate.bytesEndsWith(rules.type.value.suffix));
        }

        if (rules.type.value.len !== undefined) {
          typing.push(f.validate.bytesLength(rules.type.value.len));
        }

        if (rules.type.value.maxLen !== undefined) {
          typing.push(f.validate.bytesMaxLength(rules.type.value.maxLen));
        }

        if (rules.type.value.minLen !== undefined) {
          typing.push(f.validate.bytesMinLength(rules.type.value.minLen));
        }

        if (rules.type.value.in.length) {
          typing.push(f.validate.bytesIsIn(rules.type.value.in));
        }

        if (rules.type.value.notIn.length) {
          typing.push(f.validate.bytesIsNotIn(rules.type.value.notIn));
        }

        if (rules.type.value.const !== undefined) {
          typing.push(f.validate.bytesEquals(rules.type.value.const));
        }

        if (rules.type.value.pattern !== undefined) {
          // TODO: Implement
        }

        if (rules.type.value.wellKnown.value) {
          switch (rules.type.value.wellKnown.case) {
            case "ip": {
              // TODO: Implement
              break;
            }

            case "ipv4": {
              // TODO: Implement
              break;
            }

            case "ipv6": {
              // TODO: Implement
              break;
            }
          }
        }

        if (rules.type.value.ignoreEmpty) {
          typing = [f.scalars[ScalarType.BYTES], f.validate.bytesLength(0), f.or(typing)];
        }
      }

      break;
    }

    case ScalarType.STRING: {
      typing.push(f.scalars[ScalarType.STRING]);

      if (hasRulesFor("string", rules)) {
        if (rules.type.value.len !== undefined) {
          typing.push(".length(", Number(rules.type.value.len), ")");
        }

        if (rules.type.value.minLen !== undefined) {
          typing.push(".min(", Number(rules.type.value.minLen), ")");
        }

        if (rules.type.value.maxLen !== undefined) {
          typing.push(".max(", Number(rules.type.value.maxLen), ")");
        }

        if (rules.type.value.prefix !== undefined) {
          typing.push('.startsWith("', rules.type.value.prefix, '")');
        }

        if (rules.type.value.suffix !== undefined) {
          typing.push('.endsWith("', rules.type.value.suffix, '")');
        }

        if (rules.type.value.pattern !== undefined) {
          typing.push(f.validate.stringMatches(rules.type.value.pattern));
        }

        if (rules.type.value.lenBytes !== undefined) {
          typing.push(f.validate.bytesLength(rules.type.value.lenBytes));
        }

        if (rules.type.value.minBytes !== undefined) {
          typing.push(f.validate.bytesMinLength(rules.type.value.minBytes));
        }

        if (rules.type.value.maxBytes !== undefined) {
          typing.push(f.validate.bytesMaxLength(rules.type.value.maxBytes));
        }

        if (rules.type.value.contains !== undefined) {
          typing.push(f.validate.stringContains(rules.type.value.contains));
        }

        if (rules.type.value.notContains !== undefined) {
          typing.push(f.validate.stringNotContains(rules.type.value.notContains));
        }

        if (rules.type.value.in.length) {
          const values = rules.type.value.in.map((value) => literalString(value));
          typing.push(f.validate.isIn(values));
        }

        if (rules.type.value.notIn.length) {
          const values = rules.type.value.notIn.map((value) => literalString(value));
          typing.push(f.validate.isNotIn(values));
        }

        if (rules.type.value.const !== undefined) {
          typing.push(f.validate.isConst(rules.type.value.const));
        }

        if (rules.type.value.wellKnown.value) {
          switch (rules.type.value.wellKnown.case) {
            case "email": {
              typing.push(f.validate.stringIsEmail());
              break;
            }

            case "hostname": {
              typing.push(f.validate.stringIsHostname());
              break;
            }

            case "ip": {
              typing.push(f.validate.stringIsIp());
              break;
            }

            case "ipv4": {
              typing.push(f.validate.stringIsIp(4));
              break;
            }

            case "ipv6": {
              typing.push(f.validate.stringIsIp(6));
              break;
            }

            case "uri": {
              typing.push(f.validate.stringIsUrl());
              break;
            }

            case "uriRef": {
              typing.push(f.validate.stringIsUrl(false));
              break;
            }

            case "address": {
              typing.push(f.validate.stringIsAddress());
              break;
            }

            case "uuid": {
              typing.push(f.validate.stringIsUuid());
              break;
            }

            case "wellKnownRegex": {
              const strict = rules.type.value.strict ?? true;

              switch (rules.type.value.wellKnown.value) {
                case KnownRegex.HTTP_HEADER_NAME: {
                  typing.push(f.validate.stringIsHttpHeaderName(strict));
                  break;
                }

                case KnownRegex.HTTP_HEADER_VALUE: {
                  typing.push(f.validate.stringIsHttpHeaderValue(strict));
                  break;
                }
              }
            }
          }
        }

        if (rules.type.value.ignoreEmpty) {
          typing = [f.literal(""), f.or(typing)];
        }
      }

      break;
    }

    case ScalarType.INT32:
    case ScalarType.UINT32:
    case ScalarType.SINT32:
    case ScalarType.FIXED32:
    case ScalarType.SFIXED32:
    case ScalarType.INT64:
    case ScalarType.UINT64:
    case ScalarType.SINT64:
    case ScalarType.FIXED64:
    case ScalarType.SFIXED64:
    case ScalarType.DOUBLE:
    case ScalarType.FLOAT: {
      typing.push(f.scalars[scalar]);

      if (hasRulesForScalar(scalar, rules)) {
        const { lt, lte, gt, gte } = rules.type.value;

        if (gt !== undefined && gte !== undefined) {
          throw new Error("Can only specify `gt` or `gte`, not both");
        }

        if (lt !== undefined && lte !== undefined) {
          throw new Error("Can only specify `lt` or `lte`, not both");
        }

        if (lt !== undefined) {
          if (gt !== undefined) {
            if (lt > gt) {
              typing.push(f.validate.numberInsideGtLt(gt, lt));
            } else {
              typing.push(f.validate.numberOutsideGtLt(gt, lt));
            }
          } else if (gte !== undefined) {
            if (lt > gte) {
              typing.push(f.validate.numberInsideGteLt(gte, lt));
            } else {
              typing.push(f.validate.numberOutsideGteLt(gte, lt));
            }
          } else {
            typing.push(f.validate.numberLt(lt));
          }
        } else if (lte !== undefined) {
          if (gt !== undefined) {
            if (lte > gt) {
              typing.push(f.validate.numberInsideGtLte(gt, lte));
            } else {
              typing.push(f.validate.numberOutsideGtLte(gt, lte));
            }
          } else if (gte !== undefined) {
            if (lte > gte) {
              typing.push(f.validate.numberInsideGteLte(gte, lte));
            } else {
              typing.push(f.validate.numberOutsideGteLte(gte, lte));
            }
          } else {
            typing.push(f.validate.numberLte(lte));
          }
        } else if (gt !== undefined) {
          typing.push(f.validate.numberGt(gt));
        } else if (gte !== undefined) {
          typing.push(f.validate.numberGte(gte));
        }

        if (rules.type.value.in.length) {
          typing.push(f.validate.isIn(rules.type.value.in));
        }

        if (rules.type.value.notIn.length) {
          typing.push(f.validate.isNotIn(rules.type.value.notIn));
        }

        if (rules.type.value.const !== undefined) {
          typing.push(f.validate.isConst(rules.type.value.const));
        }

        if (rules.type.value.ignoreEmpty) {
          typing = [f.literal(scalarDefaultValue(scalar)), f.or(typing)];
        }
      }

      break;
    }
  }

  return typing;
}

function scalarDefaultValue(type: ScalarType): any {
  switch (type) {
    case ScalarType.BOOL:
      return false;
    case ScalarType.UINT64:
    case ScalarType.FIXED64:
    case ScalarType.INT64:
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
      return BigInt(0);
    case ScalarType.DOUBLE:
    case ScalarType.FLOAT:
      return 0.0;
    case ScalarType.BYTES:
      return new Uint8Array(0);
    case ScalarType.STRING:
      return "";
    case ScalarType.UINT32:
    case ScalarType.FIXED32:
    case ScalarType.INT32:
    case ScalarType.SFIXED32:
    case ScalarType.SINT32:
      return 0;
  }
}
