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

  return (
    <Field.Root invalid={Boolean(props.error)}>
      {props.label && (
        <Field.Label htmlFor={props.id}>
          {props.label}{" "}
          {props.required && (
            <Text color="red.500" fontWeight="600" as="span">
              *
            </Text>
          )}
        </Field.Label>
      )}
      <InputGroup
        startElement={props.leftAddon}
        endElement={props.rightElement}
      >
        <Input
          {...props}
          bg="gray.900"
          _placeholder={{ color: "green.100", opacity: "0.5" }}
          {...register(props.id, {
            required: {
              value: !!props.required,
              message: "Please fill out this field",
            },
            onChange: props.onChange,
          })}
        />
      </InputGroup>
      {props.helperText && <Text color="gray.500">{props.helperText}</Text>}
      <Field.ErrorText>{props.error}</Field.ErrorText>
    </Field.Root>
  );
};

export default InputField;
