import { defineConfig, fontProviders } from 'astro/config';

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
  fonts: [
    {
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      provider: fontProviders.fontsource(),
      subsets: ["latin", "latin-ext"],
      unicodeRange: ["U+2500-257F"],  // box-drawing characters
      fallbacks: [],
      display: "block",
    },
  ]
});
