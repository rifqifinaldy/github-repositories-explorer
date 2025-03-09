"use client";

import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import InputField from "@components/_customs/inputs/input-field";
import useRepositories from "@hooks/useRepositories";
import { COLOUR_PALLETE } from "@themes/colors.theme";
import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { BiSearchAlt2 } from "react-icons/bi";

const HomePages: React.FC = () => {
  const methods = useForm({
    defaultValues: {
      search: "",
    },
  });
  const { getGithubUser, user } = useRepositories();

  const { pending, success } = user;
  const { handleSubmit, watch } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    getGithubUser(data.search);
  };

  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" w="full">
      <FormProvider {...methods}>
        <Flex
          bg="gray.800"
          rounded="md"
          border={`1px solid ${COLOUR_PALLETE.gray[700].value}`}
          outline="none"
          p="20px"
          onSubmit={handleSubmit(onSubmit)}
          as="form"
          w="768px"
          flexDir="column"
          gap="12px"
        >
          <Heading mb="8px" fontSize="5xl" as="h1" color="brand.500">
            Repositories Finder
          </Heading>
          <Text color="gray.200" fontSize="sm">
            Search for repositories on GitHub by entering the owner&apos;s
            username. For example, if you&apos;re looking for repositories under
            the &apos;rifqifinaldy&apos; GitHub account, simply type the
            username in the search bar and click the search button. This tool
            will help you quickly find repositories from any GitHub user
            account.
          </Text>
          <Flex mt="20px" flexDir="column" gap="10px">
            <InputField
              id="search"
              name="search"
              label="Search"
              placeholder="Search by Owner..."
              size="md"
              w="full"
              required
              rightElement={<BiSearchAlt2 />}
              helperText={
                watch("search")
                  ? `You can now click the button below to search for '${watch("search")}'.`
                  : "Type the owner's username before submitting, e.g., rifqifinaldy."
              }
            />
            <Button
              loading={pending}
              disabled={watch("search")?.length <= 0}
              type="submit"
              colorPalette="blue"
            >
              Search
            </Button>
            {success && (
              <Text role="button" fontSize="xs" color="gray.200">
                Reset
              </Text>
            )}
          </Flex>
        </Flex>
      </FormProvider>
    </Flex>
  );
};

export default HomePages;
