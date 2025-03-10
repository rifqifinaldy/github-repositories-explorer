"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import RepoCard from "@components/_customs/cards/repo-card";
import { NAVIGATION } from "@config/navigation";
import useRepositories from "@hooks/useRepositories";
import LoadingPage from "@page-modules/loading";
import NotFoundPage from "@page-modules/not-found";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const UserRepoPages: React.FC = () => {
  const { push } = useRouter();
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
          <Button onClick={() => push(NAVIGATION.HOMEPAGE)} colorPalette="blue">
            Search another
          </Button>
        </Flex>
        {data?.map((repo) => {
          return <RepoCard key={repo.id} repo={repo} />;
        })}
      </Flex>
    );
  }
};

export default UserRepoPages;
