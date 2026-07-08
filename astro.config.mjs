import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://www.madebycalvin.com",
  markdown: {
    shikiConfig: {
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
      provider: fontProviders.local(),
      options: {
        variants: [
          { src: ["./src/assets/fonts/JetbrainsMono.woff2"] },
          { src: ["./src/assets/fonts/JetbrainsMono-italic.woff2"] },
        ]
      },
      subsets: ["latin", "latin-ext"],
      fallbacks: [],
      display: "block",
    },
  ]
});
