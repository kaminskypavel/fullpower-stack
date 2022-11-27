import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // basicSsl(),
    react(),
  ],
  resolve: {
    alias: {
      "#pages": path.resolve(__dirname, "./src/pages"),
      "#pages/*": path.resolve(__dirname, "./src/pages/*"),
      "#mocks": path.resolve(__dirname, "./src/mocks"),
      "#mocks/*": path.resolve(__dirname, "./src/mocks/*"),
      "#hooks": path.resolve(__dirname, "./src/hooks"),
      "#hooks/*": path.resolve(__dirname, "./src/hooks/*"),
      "#components": path.resolve(__dirname, "./src/components"),
      "#components/*": path.resolve(__dirname, "./src/components/*"),
      "#store": path.resolve(__dirname, "./src/store"),
      "#store/*": path.resolve(__dirname, "./src/store/*"),
      "#services": path.resolve(__dirname, "./src/services"),
      "#services/*": path.resolve(__dirname, "./src/services/*"),
      "#router": path.resolve(__dirname, "./src/router"),
      "#router/*": path.resolve(__dirname, "./src/router/*"),
    },
  },
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
