import { AnyComponent } from "preact";
import { Home } from "@/pages/Home";

interface IRoute {
  path: string;
  component: AnyComponent<any>;
}

export const routes: IRoute[] = [
  {
    path: "/",
    component: Home,
  },
] as const;
