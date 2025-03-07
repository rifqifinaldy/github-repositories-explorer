import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react";
import { forwardRef, InputHTMLAttributes, Ref } from "react";

export interface RadioProps extends ChakraRadioGroup.ItemProps {
  rootRef?: Ref<HTMLDivElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { children, inputProps, rootRef, ...rest } = props;
  return (
    <ChakraRadioGroup.Item ref={rootRef} {...rest}>
      <ChakraRadioGroup.ItemHiddenInput ref={ref} {...inputProps} />
      <ChakraRadioGroup.ItemIndicator />
      {children && (
        <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>
      )}
    </ChakraRadioGroup.Item>
  );
});

Radio.displayName = "Radio";

export const RadioGroup = ChakraRadioGroup.Root;
