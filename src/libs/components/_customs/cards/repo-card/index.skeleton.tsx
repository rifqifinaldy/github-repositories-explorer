import { Box, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";
import { COLOUR_PALLETE } from "@themes/colors.theme";
import React from "react";

const RepoCardSkeleton: React.FC = () => {
  return (
    <Flex
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
          <SkeletonText color="blue" height="20px" width="200px" />
          <Skeleton height="16px" width="250px" mt="6px" />
        </Box>
        <Box>
          <Skeleton height="16px" width="120px" mt="6px" />
          <Skeleton height="32px" width="100%" mt="12px" />
        </Box>
      </Flex>

      <Skeleton height="30px" width="80px" mt="12px" />

      <Flex
        w="fit-content"
        p="8px"
        rounded="full"
        justifyContent="center"
        alignItems="center"
        minW="80px"
        border={`1px solid ${COLOUR_PALLETE.brand[300].value}`}
      >
        <Skeleton height="16px" width="60px" />
      </Flex>
    </Flex>
  );
};

export default RepoCardSkeleton;
