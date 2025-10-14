import { createBrowserRouter, RouterProvider } from "react-router";
import authRoutes from "./authRoutes";
import NotFoundPage from "../pages/client/NotFoundPage";
import clientRoutes from "./clientRoutes";
import adminRoutes from "./adminRoutes";

let router = createBrowserRouter([
  // client routes
  ...clientRoutes,

  // admin routes
  ...adminRoutes,

  // auth routes
  ...authRoutes,
  { path: "*", Component: NotFoundPage },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
