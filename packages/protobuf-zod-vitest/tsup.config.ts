import { defineConfig } from "tsup";

export default defineConfig(() => ({
  entry: ["src/index.ts", "src/types.ts"],
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  silent: true,
  minify: false,
}));
