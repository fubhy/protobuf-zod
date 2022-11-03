import { createEcmaScriptPlugin } from "@bufbuild/protoplugin";
import { generateTs } from "./generate.js";

export function createPlugin(version: string = "0.0.0") {
  return createEcmaScriptPlugin({
    name: "protoc-gen-validate-zod-test",
    version: `v${version}`,
    generateTs,
    parseOption: (key) => {
      if (key !== "cases" && key !== "descriptor") {
        throw new Error("Unknown option");
      }
    },
  });
}
