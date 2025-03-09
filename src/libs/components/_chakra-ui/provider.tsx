"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { CUSTOM_THEME } from "@themes/config.theme";

export function UiProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={CUSTOM_THEME}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
