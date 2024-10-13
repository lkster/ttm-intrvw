import tatumLogo from "../../assets/tatum.jpeg";
import Form from "./form";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import WalletBalance from "./walletBalance";
import * as ethereum from "../../lib/ethereum";
import { ReactElement } from "react";
import { Maybe } from "../../types/maybe";

export function Home() {
  const [walletBalance, setWalletBalance] = useState<Maybe<string>>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Maybe<string>>(null);
  let walletBalanceComponent: Maybe<ReactElement>;
  let errorElement: Maybe<ReactElement>;

  const onFormSubmit = async (walletAddress) => {
    setWalletBalance(null);
    walletBalanceComponent = null;
    setIsLoading(true);
    setError(null);

    try {
      setWalletBalance(await ethereum.getBalance(walletAddress));
    } catch (e) {
      setError(e?.message);
    }

    setIsLoading(false);
  };

  if (walletBalance != null) {
    walletBalanceComponent = (
      <Box mt="1rem">
        <WalletBalance balance={walletBalance} />
      </Box>
    );
  }

  if (error != null) {
    errorElement = (
      <Alert status="error" borderRadius="var(--chakra-radii-md)">
        <AlertIcon />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      gap="1rem"
      p="1.5rem"
      pt="5rem"
    >
      <a href="https://preactjs.com" target="_blank">
        <img src={tatumLogo} alt="Preact logo" height="160" width="160" />
      </a>
      <Heading size="lg" color="gray.600">
        Tatum ETH Balance Checker
      </Heading>
      <Flex w={{ base: "100%", md: "500px" }} direction="column" gap="1rem">
        {errorElement}
        <Form onSubmit={onFormSubmit} isLoading={isLoading} />
        {walletBalanceComponent}
      </Flex>
    </Flex>
  );
}
