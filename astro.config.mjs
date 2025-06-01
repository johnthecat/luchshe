// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://johnthecat.github.io',
  base: '/luchshe',

  vite: {
    plugins: [tailwindcss()],
  },
});