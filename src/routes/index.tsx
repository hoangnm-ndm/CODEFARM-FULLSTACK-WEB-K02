import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import LayoutClient from "../components/LayoutClient";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayoutClient,
    children: [{ path: "/", Component: HomePage }],
  },
  { path: "/login", Component: LoginPage },
  { path: "/register", Component: RegisterPage },
]);

const AppRoute = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoute;
