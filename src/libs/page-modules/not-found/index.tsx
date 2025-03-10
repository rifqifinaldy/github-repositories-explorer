"use client";

import { Button, Flex } from "@chakra-ui/react";
import NoResult from "@components/_customs/empty/no-result";
import { NAVIGATION } from "@config/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
  const { push } = useRouter();
  return (
    <Flex h="50vh" flexDir="column" alignItems="center" justifyContent="center">
      <NoResult
        title="Oops! Page Not Found"
        subtitle="Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or you might have typed the URL incorrectly"
      />
      <Button
        onClick={() => push(NAVIGATION.HOMEPAGE)}
        variant="outline"
        w="fit-content"
      >
        Back To Homepage
      </Button>
    </Flex>
  );
};

export default NotFoundPage;
