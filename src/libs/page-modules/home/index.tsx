"use client";

import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import NoResult from "@components/_customs/empty/no-result";
import UserCard from "@components/_customs/cards/user-card";
import InputField from "@components/_customs/inputs/input-field";
import useRepositories from "@hooks/useRepositories";
import { COLOUR_PALLETE } from "@themes/colors.theme";
import React, { useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { BiSearchAlt2 } from "react-icons/bi";
import RepoCardSkeleton from "@components/_customs/cards/repo-card/index.skeleton";

const HomePages: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const methods = useForm({
    defaultValues: {
      search: "",
    },
  });
  const { searchUser, resetUser, user } = useRepositories();

  const { pending, success, data: userData, error } = user;
  const { handleSubmit, watch, reset: resetForm } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setKeyword(data.search);
    searchUser(data.search);
  };

  const onReset = () => {
    resetForm();
    resetUser();
  };

  const searchQuery = watch("search");
  let helperText =
    "Type the owner's username before submitting, e.g., rifqifinaldy.";

  if (searchQuery) {
    helperText = success
      ? `Found 1 search result for ${searchQuery}`
      : `You can now click the button below to search for '${searchQuery}'.`;
  }

  return (
    <>
      <FormProvider {...methods}>
        <Flex
          bg="gray.800"
          rounded="md"
          border={`1px solid ${COLOUR_PALLETE.gray[700].value}`}
          outline="none"
          p="20px"
          onSubmit={handleSubmit(onSubmit)}
          as="form"
          flexDir="column"
          gap="12px"
        >
          <Heading
            mb="8px"
            fontSize={{ sm: "2xl", lg: "5xl" }}
            as="h1"
            color="brand.500"
          >
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
              rightElement={<BiSearchAlt2 size="20px" />}
              helperText={helperText}
            />
            <Button
              loading={pending}
              loadingText="Please Wait..."
              disabled={watch("search")?.length <= 0}
              type="submit"
              colorPalette="blue"
            >
              Search
            </Button>
          </Flex>
        </Flex>
      </FormProvider>
      {(success || error) && (
        <Flex w="full" flexDir="column" gap="20px">
          <Flex
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ base: "flex-start", md: "center" }}
          >
            <Text>Search Result for: {keyword}</Text>
            <Button variant="ghost" color="red.200" onClick={() => onReset()}>
              Reset
            </Button>
          </Flex>
          {userData && success && (
            <UserCard key={`user-${userData?.id}`} user={userData} />
          )}
          {Boolean(!userData) && Boolean(error && error?.status === 404) && (
            <NoResult />
          )}
          <RepoCardSkeleton />
        </Flex>
      )}
    </>
  );
};

export default HomePages;
