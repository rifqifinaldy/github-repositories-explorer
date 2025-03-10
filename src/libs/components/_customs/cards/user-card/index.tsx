import { Box, Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@components/_chakra-ui/avatar";
import { NAVIGATION } from "@config/navigation";
import { IGitHubUser } from "@data-type/repositories.type";
import { COLOUR_PALLETE } from "@themes/colors.theme";
import { useRouter } from "next/navigation";
import React from "react";

const UserCard: React.FC<{ user: IGitHubUser }> = ({ user }) => {
  const { push } = useRouter();

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
      <Flex alignItems="center" gap="20px">
        <Box w="125px" h="125px">
          <Avatar
            size="full"
            shadow="sm"
            shadowColor="red.500"
            src={user?.avatar_url}
            name={user?.name || ""}
          />
        </Box>
        <Stack py="12px" gap="5px">
          <Box>
            <Text fontSize="xl"> {user?.name}</Text>
            <Flex gap="12px" color="gray.400">
              <Text>Followers: {user?.followers}</Text>
              <Text>Following: {user?.following}</Text>
            </Flex>
          </Box>
          <Box>
            <Text fontSize="md" color="gray.200">
              {" "}
              {user?.bio}{" "}
            </Text>
          </Box>
          {user?.blog && (
            <Link
              role="a"
              color="blue.100"
              href={user?.blog as string}
              target="_blank"
            >
              {user?.blog}
            </Link>
          )}
        </Stack>
      </Flex>
      <Button
        onClick={() => (window.location.href = user?.html_url)}
        colorPalette="green"
      >
        Visit Github Profile
      </Button>

      <Button
        onClick={() => push(NAVIGATION.USER_REPO(user.login as string))}
        disabled={user?.public_repos <= 0}
        colorPalette="blue"
      >
        See all repositories
      </Button>
      {user?.public_repos <= 0 && (
        <Text textAlign="center" color="gray.600" fontSize="sm">
          This user doesn&apos;t have any public repositories to see
        </Text>
      )}
    </Flex>
  );
};

export default UserCard;
