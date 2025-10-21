import { Children, Component } from "react";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import LayoutAuth from "../layouts/LayoutAuth";
import AuthProtected from "./protected/AuthProtected";

const authRoutes = [
  {
    path: "auth",
    element: (
      <AuthProtected>
        <LayoutAuth />
      </AuthProtected>
    ),
    children: [
      { path: "register", Component: RegisterPage },
      { path: "login", Component: LoginPage },
    ],
  },
];

export default authRoutes;
