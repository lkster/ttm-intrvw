import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export interface IFormHelpModalParams {
  isOpen: boolean;
  onClose(): void;
}

export default function FormHelpModal({
  isOpen,
  onClose,
}: IFormHelpModalParams) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pr="2.5rem">What is Ethereum Wallet Address?</ModalHeader>
        <ModalCloseButton />
        <ModalBody lineHeight="1.8" textAlign="justify">
          Ethereum wallet address is your public unique identifier that refers
          to your account and is used eg. to receive funds. It is a 42-character
          hexadecimal address derived from the last 20 bytes of the public key
          controlling the account with "0x" appended in front. For example:
          <Text fontWeight="semibold">
            0x71C7656EC7ab88b098defB751B7401B5f6d8976F
          </Text>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
