"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import RepoCard from "@components/_customs/cards/repo-card";
import RepoCardSkeleton from "@components/_customs/cards/repo-card/index.skeleton";
import { NAVIGATION } from "@config/navigation";
import useRepositories from "@hooks/useRepositories";
import LoadingPage from "@page-modules/loading";
import NotFoundPage from "@page-modules/not-found";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const UserRepoPages: React.FC = () => {
  const { push } = useRouter();
  const { user: userQuery } = useParams();
  const {
    getUserRepo,
    resetRepo,
    repos,
    getMoreUserRepo,
    loadMoreRepos,
    repoParams,
  } = useRepositories();

  const { total, data, success, pending, error } = repos;
  const { pending: isLoadMore, success: isLoadMoreSuccess } = loadMoreRepos;

  const bottomRef = useRef<HTMLDivElement>(null); // Reference to the bottom element

  useEffect(() => {
    if (userQuery) {
      getUserRepo({
        query: userQuery as string,
        per_page: 5,
      });
    }
    return () => {
      resetRepo();
    };
  }, [getUserRepo, resetRepo, userQuery]);

  useEffect(() => {
    if (isLoadMoreSuccess && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoadMoreSuccess]);

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
        {isLoadMore &&
          Array(5)
            .fill(0)
            .map((_, index) => <RepoCardSkeleton key={index} />)}
        {(total as number) >= (repoParams.per_page as number) && (
          <Button
            onClick={() =>
              getMoreUserRepo({
                query: userQuery as string,
              })
            }
            variant="outline"
            colorPalette="blue"
          >
            Load More
          </Button>
        )}

        <div ref={bottomRef} />
      </Flex>
    );
  }
};

export default UserRepoPages;
