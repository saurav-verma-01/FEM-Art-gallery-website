// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve("Art gallery website", "./index.html"),
        nested: resolve("Art gallery website", "./location.html"),
      },
    },
  },
});
