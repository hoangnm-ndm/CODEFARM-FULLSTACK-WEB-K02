import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  { path: "/", Component: HomePage },
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
