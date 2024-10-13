/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function isWalletAddresValid(address: string): boolean {
  return /^0x[0-9a-f]{40}$/i.test(address);
}

export interface IFormProps {
  onSubmit: (address: string) => void;
  isLoading?: boolean;
}

export default function AForm({ onSubmit, isLoading }: IFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async ({ walletAddress }) => {
    onSubmit?.(walletAddress);
  };

  return (
    <Flex direction="column" gap="1rem">
      <form onsubmit={handleSubmit(onFormSubmit)} css={{ display: "contents" }}>
        <FormControl isInvalid={!!errors.walletAddress}>
          <Input
            type="text"
            size="lg"
            placeholder="Enter ETH wallet address to get balance"
            {...register("walletAddress", {
              disabled: isLoading,
              pattern: {
                value: /^0x[0-9a-f]{40}$/i,
                message:
                  'Wallet address should consist of "0x" prefix and 40 hexadecimal characters',
              },
              required: "You need to provide wallet address first",
            })}
          ></Input>
          <FormErrorMessage>{errors.walletAddress?.message}</FormErrorMessage>
        </FormControl>
        <Button
          isLoading={isLoading}
          loadingText="Checking balance"
          colorScheme="teal"
          size="lg"
          type="submit"
        >
          Check balance
        </Button>
      </form>
    </Flex>
  );
}
