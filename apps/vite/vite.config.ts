import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
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
          target: env.VITE_IS_DOCKER
            ? "http://express-backend:4000"
            : "http://localhost:4000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
