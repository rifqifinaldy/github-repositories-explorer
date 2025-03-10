import { Flex } from "@chakra-ui/react";
import LoadingState from "@components/_customs/loading";
import React from "react";

const PageLoader: React.FC = () => {
  return (
    <Flex h="50vh" flexDir="column" alignItems="center" justifyContent="center">
      <LoadingState />
    </Flex>
  );
};

export default PageLoader;
