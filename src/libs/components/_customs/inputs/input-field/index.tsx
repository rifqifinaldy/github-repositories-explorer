import React, { JSX } from "react";
import { Input, Text, Field, InputProps } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { InputGroup } from "@components/_chakra-ui/input-group";

interface InputFieldProps extends InputProps {
  id: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  rightElement?: React.ReactNode | JSX.Element;
  leftElement?: React.ReactNode | JSX.Element;
  rightAddon?: React.ReactNode | JSX.Element;
  leftAddon?: React.ReactNode | JSX.Element;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { register } = useFormContext();

  // Destructure the props and exclude the ones we don't want to pass to Input
  const {
    label,
    rightElement,
    leftElement,
    rightAddon,
    leftAddon,
    error,
    helperText,
    required,
    onChange,
    ...inputProps // This collects the remaining props to be passed to Input
  } = props;

  return (
    <Field.Root invalid={Boolean(error)} w="full">
      {label && (
        <Field.Label color="gray.100" fontWeight={500} htmlFor={props.id}>
          {label}{" "}
          {required && (
            <Text color="red.200" fontWeight="600" as="span" fontSize="xs">
              *
            </Text>
          )}
        </Field.Label>
      )}
      <InputGroup
        startElement={leftAddon || leftElement} // Pass leftAddon or leftElement to InputGroup
        endElement={rightAddon || rightElement} // Pass rightAddon or rightElement to InputGroup
        w={inputProps.w}
      >
        <Input
          {...inputProps} // Pass the remaining props to the Input component
          bg="gray.950"
          borderColor="gray.600"
          _focus={{ borderColor: "brand.500", outline: "none" }}
          _placeholder={{ color: "brand.50", opacity: "0.45", fontSize: "xs" }}
          {...register(props.id, {
            required: {
              value: !!required,
              message: "Please fill out this field",
            },
            onChange: onChange,
          })}
        />
      </InputGroup>
      {helperText && (
        <Field.HelperText fontSize="xs" color="gray.500">
          {helperText}
        </Field.HelperText>
      )}
      <Field.ErrorText>{error}</Field.ErrorText>
    </Field.Root>
  );
};

export default InputField;
