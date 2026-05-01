import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://www.madebycalvin.com",
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      themes: {
        light: "github-light-high-contrast",
        dark: "github-dark-high-contrast",
      },
    },
  },
});
