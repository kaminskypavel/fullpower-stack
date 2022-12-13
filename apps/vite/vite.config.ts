import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // basicSsl(),
    react(),
  ],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./setupTests.ts",
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
