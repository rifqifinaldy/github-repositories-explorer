"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import InputField from "@components/_customs/inputs/input-field";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BiSearchAlt2 } from "react-icons/bi";

const HomePages: React.FC = () => {
  const methods = useForm();

  return (
    <Box w="full">
      <FormProvider {...methods}>
        <Heading></Heading>
        <InputField
          id="search"
          name="search"
          label="Search"
          placeholder="Search Repositories Name...."
          size="sm"
          required
          rightElement={
            <Text>
              <BiSearchAlt2 />
            </Text>
          }
        />
      </FormProvider>
    </Box>
  );
};

export default HomePages;
