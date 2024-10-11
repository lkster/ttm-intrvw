import { render } from "preact";
import { LocationProvider } from "preact-iso";
import "./style.css";
import AppRouter from "./router";

function App() {
  return (
    <LocationProvider>
      <main>
        <AppRouter />
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
