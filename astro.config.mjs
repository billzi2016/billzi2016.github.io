import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  build: {
    format: "file",
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
