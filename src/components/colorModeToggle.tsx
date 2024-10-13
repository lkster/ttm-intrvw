import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";
import { Box, Button, Image, useColorMode } from "@chakra-ui/react";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "light" ? moonIcon : sunIcon;

  return (
    <Box position="absolute" top="1rem" right="1rem">
      <Button variant="ghost" onClick={toggleColorMode}>
        <Image src={icon} w="20px" />
      </Button>
    </Box>
  );
}
