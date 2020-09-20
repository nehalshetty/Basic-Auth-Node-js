import React, { useEffect } from "react";
import { useRoutes, A } from "hookrouter";
import { routes } from "./routes";

export default function App() {
  const routeResult = useRoutes(routes);
  return (
    <div>
      <A href="login">Login</A>
      {routeResult || " Here I am!"}{" "}
    </div>
  );
}
