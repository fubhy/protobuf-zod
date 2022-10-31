import { createEcmaScriptPlugin } from "@bufbuild/protoplugin";
import { generateTs } from "./generate.js";

export function createPlugin(version: string = "0.0.0") {
  return createEcmaScriptPlugin({
    name: "protoc-gen-validate-zod",
    version: `v${version}`,
    generateTs,
  });
}
