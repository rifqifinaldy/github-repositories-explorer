import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { IGitHubRepository } from "@data-type/repositories.type";
import { COLOUR_PALLETE } from "@themes/colors.theme";
import dayjs from "dayjs";
import React from "react";

const RepoCard: React.FC<{ repo: IGitHubRepository }> = ({ repo }) => {
  return (
    <Flex
      bg="gray.800"
      rounded="md"
      border={`1px solid ${COLOUR_PALLETE.gray[700].value}`}
      outline="none"
      p="20px"
      flexDir="column"
      gap="12px"
      w="full"
    >
      <Flex justifyContent="space-between">
        <Box>
          <Text fontSize="lg">{repo?.name} </Text>
          <Text fontSize="sm" color="gray.200">
            {repo?.description}
          </Text>
        </Box>
        <Box>
          <Text textAlign="end" fontSize="xs" color="gray.200">
            Created at: {dayjs(repo?.created_at).format("DD MMM YYYY")}
          </Text>
          <Button
            onClick={() => (window.location.href = repo?.html_url)}
            mt="12px"
            size="sm"
            colorPalette="blue"
          >
            Visit this Repository
          </Button>
        </Box>
      </Flex>
      {repo?.language && (
        <Flex
          w="fit-content"
          p="8px"
          rounded="full"
          justifyContent="center"
          alignItems="center"
          minW="80px"
          border={`1px solid ${COLOUR_PALLETE.brand[300].value}`}
        >
          <Text fontSize="xs" color="brand.500">
            {repo?.language}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default RepoCard;
