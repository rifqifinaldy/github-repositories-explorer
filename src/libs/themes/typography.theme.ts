import { TextProps } from "@chakra-ui/react";

export const FONTS_THEME = {
  heading: { value: "var(--font-ubuntu-sans)" },
  body: { value: "var(--font-ubuntu-sans)" },
};

interface ITextStyles {
  description: string;
  value: TextProps;
}

const bodySmall: ITextStyles = {
  description: "Custom Small Body Text",
  value: {
    as: "p",
    fontSize: "16px",
  },
};

const bodyMedium: ITextStyles = {
  description: "Custom Medium Body Text",
  value: {
    as: "p",
    fontSize: "18px",
  },
};

const bodyLarge: ITextStyles = {
  description: "Custom Large Body Text",
  value: {
    as: "p",
    fontSize: "22px",
  },
};

export const TEXT_STYLES = {
  "body/sm": bodySmall,
  "body/md": bodyMedium,
  "body/lg": bodyLarge,
};
