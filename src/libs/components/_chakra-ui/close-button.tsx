import type { ButtonProps } from "@chakra-ui/react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import { forwardRef } from "react";
import { LuX } from "react-icons/lu";

export type CloseButtonProps = ButtonProps;

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  (props, ref) => {
    return (
      <ChakraIconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
        {props.children ?? <LuX />}
      </ChakraIconButton>
    );
  }
);

CloseButton.displayName = "CloseButton";
