import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react() as any],
  test: {
    globals: true,
    environment: "happy-dom", // or 'jsdom', 'node'
    setupFiles: "./setupTests.ts",
    exclude: ["**/node_modules/**", "**/e2e/**/*.spec.*"],
  },
});
