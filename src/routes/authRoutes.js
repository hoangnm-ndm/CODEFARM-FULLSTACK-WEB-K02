import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/Registerpage";

const authRoutes = [
  { path: "/auth/register", Component: RegisterPage },
  { path: "/auth/login", Component: LoginPage },
];

export default authRoutes;
