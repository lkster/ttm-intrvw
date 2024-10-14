import { Flex, Heading, Text } from "@chakra-ui/react";

export function NotFound() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      gap="1rem"
      p="1.5rem"
      pt={{ base: "6rem", md: "10rem" }}
    >
      <Heading>404: Not Found</Heading>
      <Text>It's gone :(</Text>
    </Flex>
  );
}
