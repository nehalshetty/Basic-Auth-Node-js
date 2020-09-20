import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import React from "react";

export const routes = {
  "/login": () => <Login />,
  "/Register": () => <Register />,
  "/Profile": () => <Profile />,
};
