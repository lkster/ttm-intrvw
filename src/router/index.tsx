import { routes } from "./routes";
import { Route, Router } from "preact-iso";
import { JSX } from "preact";
import { NotFound } from "../pages/_404";

export default function AppRouter() {
  const routeList: JSX.Element[] = [
    ...routes.map((route) => (
      <Route path={route.path} component={route.component} />
    )),
    <Route default component={NotFound} />,
  ];

  return <Router>{routeList}</Router>;
}
