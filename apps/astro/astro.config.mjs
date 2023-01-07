import { defineConfig } from 'astro/config';
// https://docs.astro.build/en/getting-started/
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
});