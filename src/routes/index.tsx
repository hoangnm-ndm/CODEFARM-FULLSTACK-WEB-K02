import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ComponentA from "../pages/ComponentA";
import LayoutClient from "../components/LayoutClient";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayoutClient,
    children: [
      { path: "/", Component: HomePage },
      { path: "/test", Component: ComponentA },
    ],
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
