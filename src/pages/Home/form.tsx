import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

function isWalletAddresValid(address: string): boolean {
  return /^0x[0-9a-f]{40}$/i.test(address);
}

export interface IFormProps {
  onSubmit: (address: string) => void;
  isLoading?: boolean;
}

export default function Form({ onSubmit, isLoading }: IFormProps) {
  const [walletAddress, setWalletAddress] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onFormSubmit = async (e: Event) => {
    e.preventDefault();

    if (!isWalletAddresValid(walletAddress)) {
      setIsValid(false);

      return;
    }

    setIsValid(true);
    onSubmit?.(walletAddress);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.currentTarget.value);
  };

  return (
    <Flex direction="column" gap="1rem">
      <FormControl isInvalid={!isValid}>
        <Input
          type="text"
          size="lg"
          placeholder="Enter ETH wallet address to get balance"
          value={walletAddress}
          onInput={onInputChange}
          disabled={isLoading}
        ></Input>
        <FormErrorMessage>
          Wallet address should consist of "0x" prefix and 40 hexadecimal
          characters
        </FormErrorMessage>
      </FormControl>
      <Button
        isLoading={isLoading}
        loadingText="Checking balance"
        colorScheme="teal"
        size="lg"
        onClick={onFormSubmit}
        type="submit"
      >
        Check balance
      </Button>
    </Flex>
  );
}
