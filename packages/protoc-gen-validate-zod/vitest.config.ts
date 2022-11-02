import { defineConfig } from "vitest/config";
import paths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [paths({ root: "../../" })],
  test: {
    setupFiles: ["./vitest.setup.ts"],
  },
});
