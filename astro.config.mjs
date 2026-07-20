// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://billzi2016.github.io',
  base: '/english-reading-practice',
  vite: {
    plugins: [tailwindcss()]
  }
});
