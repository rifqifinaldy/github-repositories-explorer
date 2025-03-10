import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

const LoadingState: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      gap="20px"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
      <Text fontSize="xl">Please Wait</Text>
    </Flex>
  );
};

export default LoadingState;
