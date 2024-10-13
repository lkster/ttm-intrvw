import tatumLogo from "../../assets/tatum.svg";
import Form from "./form";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Flex,
  Heading,
  Image,
  Link,
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
      pt={{ base: "6rem", md: "10rem" }}
    >
      <Link href="https://tatum.io" target="_blank">
        <Image
          src={tatumLogo}
          alt="Tatum logo"
          height="120"
          aspectRatio="1/1"
        />
      </Link>
      <Heading size="lg" color="gray.600" textAlign="center">
        Tatum ETH Balance Checker
      </Heading>
      <Flex
        w={{ base: "100%", sm: "450px", md: "500px" }}
        direction="column"
        gap="1rem"
      >
        {errorElement}
        <Form onSubmit={onFormSubmit} isLoading={isLoading} />
        {walletBalanceComponent}
      </Flex>
    </Flex>
  );
}
