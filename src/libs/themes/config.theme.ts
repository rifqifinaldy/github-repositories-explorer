import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { COLOUR_PALLETE } from "./colors.theme";
import { TEXT_STYLES } from "./typography.theme";

// Please Re-Run this after you update this file
// npx @chakra-ui/cli typegen ./src/libs/themes/config.theme.ts

const THEMES = defineConfig({
  cssVarsPrefix: "rf",
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      backgroundColor: COLOUR_PALLETE.gray[900].value,
      color: COLOUR_PALLETE.text.light.value,
    },
  },
  theme: {
    textStyles: TEXT_STYLES,
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      // The Color below we're inspired by Github that i generated using chat gpt prompt
      colors: COLOUR_PALLETE,
      fonts: {
        heading: { value: "var(--font-ubuntu-sans)" },
        body: { value: "var(--font-ubuntu-sans)" },
      },
    },
  },
});

export const CUSTOM_THEME = createSystem(defaultConfig, THEMES);

export default createSystem(defaultConfig, THEMES);
