import { Box, Text } from "@chakra-ui/react";

export default function WalletBalance({ balance }) {
  return (
    <Box textAlign="center">
      <Text color="gray.500">Wallet Balance:</Text>
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="600">
        {balance} ETH
      </Text>
    </Box>
  );
}
