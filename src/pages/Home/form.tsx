import { useState } from "react";
import { Button, Flex, FormControl, Input } from "@chakra-ui/react";

export default function Form({ onSubmit }) {
  const [walletAddress, setWalletAddress] = useState("");

  const onFormSubmit = async (e: Event) => {
    e.preventDefault();

    onSubmit?.(walletAddress);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.currentTarget.value);
  };

  return (
    <Flex direction="column" gap="1rem">
      <FormControl>
        <Input
          type="text"
          size="lg"
          placeholder="Enter ETH wallet address to get balance"
          value={walletAddress}
          onInput={onInputChange}
        ></Input>
      </FormControl>
      <Button colorScheme="teal" size="lg" onClick={onFormSubmit} type="submit">
        Check balance
      </Button>
    </Flex>
  );
}
