import { createBrowserRouter, RouterProvider } from "react-router";
import authRoutes from "./authRoutes";
import clientRoutes from "./clientRoutes";

let router = createBrowserRouter([
  // client routes
  ...clientRoutes,
  // auth routes
  ...authRoutes,
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
