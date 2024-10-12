import preactLogo from "../../assets/tatum.jpeg";
import Form from "./form";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import WalletBalance from "./walletBalance";
import * as ethereum from "../../lib/ethereum";
import * as React from "react";
import { Maybe } from "../../types/maybe";

export function Home() {
  const [walletBalance, setWalletBalance] = useState<Maybe<string>>(null);
  const [isLoading, setIsLoading] = useState(false);
  let walletBalanceComponent: Maybe<React.ReactElement>;

  const onFormSubmit = async (walletAddress) => {
    setWalletBalance(null);
    walletBalanceComponent = null;
    setIsLoading(true);
    setWalletBalance(await ethereum.getBalance(walletAddress));
    setIsLoading(false);
  };

  if (walletBalance != null) {
    walletBalanceComponent = <WalletBalance balance={walletBalance} />;
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      gap="1rem"
      p="1.5rem"
      mt="5rem"
    >
      <a href="https://preactjs.com" target="_blank">
        <img src={preactLogo} alt="Preact logo" height="160" width="160" />
      </a>
      <Heading size="lg" color="gray.600">
        Tatum ETH Wallet Checker
      </Heading>
      <Box w={{ base: "100%", md: "500px" }}>
        <Form onSubmit={onFormSubmit} isLoading={isLoading} />
        {walletBalanceComponent}
      </Box>
    </Flex>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
