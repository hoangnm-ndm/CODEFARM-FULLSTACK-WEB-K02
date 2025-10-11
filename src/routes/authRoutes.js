import { Children, Component } from "react";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import LayoutAuth from "../layouts/LayoutAuth";

const authRoutes = [
  {
    path: "auth",
    Component: LayoutAuth,
    children: [
      { path: "register", Component: RegisterPage },
      { path: "login", Component: LoginPage },
    ],
  },
];

export default authRoutes;
