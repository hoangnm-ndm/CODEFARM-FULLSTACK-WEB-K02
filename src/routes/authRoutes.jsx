import LayoutAuth from "../components/layout/LayoutAuth";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

const authRoutes = [
  {
    path: "/",
    Component: LayoutAuth,
    children: [
      { path: "/login", Component: LoginPage },
      { path: "/register", Component: RegisterPage },
    ],
  },
];

export default authRoutes;
