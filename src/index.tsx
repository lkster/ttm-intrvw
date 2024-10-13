import { render } from "preact";
import { LocationProvider } from "preact-iso";
import AppRouter from "./router";
import { ChakraProvider } from "@chakra-ui/react";
import ColorModeToggle from "./components/colorModeToggle";

function App() {
  return (
    <LocationProvider>
      <ChakraProvider>
        <ColorModeToggle />
        <main>
          <AppRouter />
        </main>
      </ChakraProvider>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
