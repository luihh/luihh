// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  env: {
    schema: {
      LASTFM_API_KEY: envField.string({ context: 'server', access: 'secret' }),
      LASTFM_USERNAME: envField.string({ context: 'server', access: 'public' }),
    },
  },

  adapter: node({
    mode: 'standalone',
  }),
});