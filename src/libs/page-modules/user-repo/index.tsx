"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import useRepositories from "@hooks/useRepositories";
import LoadingPage from "@page-modules/loading";
import NotFoundPage from "@page-modules/not-found";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const UserRepoPages: React.FC = () => {
  const { user: userQuery } = useParams();
  const { getUserRepo, resetRepo, repos } = useRepositories();

  const { total, data, success, pending, error } = repos;

  useEffect(() => {
    if (userQuery) {
      getUserRepo(userQuery as string);
    }
    return () => {
      resetRepo();
    };
  }, [getUserRepo, resetRepo, userQuery]);

  if (pending) {
    return <LoadingPage />;
  }

  if (error) {
    return <NotFoundPage />;
  }

  if (success) {
    return (
      <Flex flexDir="column" gap="20px">
        <Flex justifyContent="space-between">
          <Box>
            <Text fontSize="lg">{userQuery} Owned Public Repositories</Text>
            <Text fontSize="sm" color="gray.200">
              Found {total} public repositories
            </Text>
          </Box>
          <Button colorPalette="blue">Search another</Button>
        </Flex>
        {data?.map((repo) => {
          return <p key={repo.id}>{repo?.name}</p>;
        })}
      </Flex>
    );
  }
};

export default UserRepoPages;
