import { render } from "preact";
import { LocationProvider } from "preact-iso";
// import "./style.css";
import AppRouter from "./router";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <LocationProvider>
      <ChakraProvider>
        <main>
          <AppRouter />
        </main>
      </ChakraProvider>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
