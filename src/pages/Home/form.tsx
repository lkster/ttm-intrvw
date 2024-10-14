/** @jsxImportSource @emotion/react */
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FormHelpModal from "./formHelpModal";

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
  const helpModalCtrl = useDisclosure();

  const onFormSubmit = async ({ walletAddress }) => {
    onSubmit?.(walletAddress);
  };

  return (
    <Flex direction="column" gap="1rem">
      <form onsubmit={handleSubmit(onFormSubmit)} css={{ display: "contents" }}>
        <FormControl isInvalid={!!errors.walletAddress}>
          <InputGroup size={{ base: "md", md: "lg" }}>
            <Input
              type="text"
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
            <InputRightElement>
              <Button
                size="sm"
                variant="ghost"
                colorScheme="teal"
                onClick={helpModalCtrl.onOpen}
              >
                ?
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.walletAddress?.message}</FormErrorMessage>
        </FormControl>
        <Button
          isLoading={isLoading}
          loadingText="Checking balance"
          colorScheme="teal"
          size={{ base: "md", md: "lg" }}
          type="submit"
        >
          Check balance
        </Button>
      </form>
      <FormHelpModal
        isOpen={helpModalCtrl.isOpen}
        onClose={helpModalCtrl.onClose}
      />
    </Flex>
  );
}
