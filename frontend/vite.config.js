import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],

    define: {
      "process.env": env,
    },

    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },

    resolve: {
      alias: {
        "@": "/src",
      },
    },

    build: {
      outDir: path.resolve(__dirname, "../backend/src/build"),
      emptyOutDir: true,
    },
  };
});
