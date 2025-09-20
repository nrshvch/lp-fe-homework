import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "./src/pages"),
      shared: path.resolve(__dirname, "./src/shared"),
    },
  },
  plugins: [react()],
});
