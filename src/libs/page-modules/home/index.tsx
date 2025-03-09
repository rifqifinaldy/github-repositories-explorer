"use client";

import { Box, Button, Text } from "@chakra-ui/react";
import InputField from "@components/_customs/inputs/input-field";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const HomePages: React.FC = () => {
  const methods = useForm();

  return (
    <Box w="full">
      <p>setting up</p>
      <Button>Some Button</Button>
      <Text textStyle="body/lg">
        Whereas recognition of the inherent dignity
      </Text>
      <Text textStyle="body/md">
        Whereas disregard and contempt for human rights have resulted
      </Text>
      <Text textStyle="body/sm">
        Whereas disregard and contempt for human rights have resulted
      </Text>
      <FormProvider {...methods}>
        <InputField
          id="search"
          name="search"
          label="Search"
          placeholder="Search Repositories Name...."
        />
      </FormProvider>
    </Box>
  );
};

export default HomePages;
