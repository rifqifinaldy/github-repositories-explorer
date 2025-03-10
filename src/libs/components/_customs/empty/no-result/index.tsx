import { EmptyState, VStack } from "@chakra-ui/react";
import React from "react";
import { HiColorSwatch } from "react-icons/hi";

interface Props {
  title?: string;
  subtitle?: string;
}

const NoResult: React.FC<Props> = ({
  title = "No Result Found",
  subtitle = "Try adjusting your search",
}) => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator data-testid="empty-state-icon">
          <HiColorSwatch data-testid="icon-image" />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>{title}</EmptyState.Title>
          <EmptyState.Description>{subtitle}</EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};

export default NoResult;
