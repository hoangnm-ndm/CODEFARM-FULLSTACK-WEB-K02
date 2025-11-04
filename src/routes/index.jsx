import { createBrowserRouter, RouterProvider } from "react-router-dom";
import clientRoutes from "./clientRoutes";
import adminRoutes from "./adminRoutes";
import authRoutes from "./authRoutes";
import NotFoundPage from "../pages/client/NotFoundPage";

const router = createBrowserRouter([
  ...clientRoutes,
  ...adminRoutes,
  ...authRoutes,
  { path: "*", Component: NotFoundPage },
]);

const AppRoute = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoute;
