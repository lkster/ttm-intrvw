import { render } from "preact";
import { LocationProvider } from "preact-iso";
import { Header } from "./components/Header.jsx";
import "./style.css";
import AppRouter from "./router";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <AppRouter />
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
