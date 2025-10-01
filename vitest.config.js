import { defineConfig } from "vitest/config";
import * as path from "path";

export default defineConfig({
  resolve: {
    alias: {
      entities: path.resolve(__dirname, "./src/entities"),
      pages: path.resolve(__dirname, "./src/pages"),
      shared: path.resolve(__dirname, "./src/shared"),
    },
  },
  test: {
    environment: "jsdom",
  },
});
