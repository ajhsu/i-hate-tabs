// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ihatetabs.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // Inlined data: URLs would need a looser Content-Security-Policy (see public/_headers).
    build: { assetsInlineLimit: 0 },
  },
});
