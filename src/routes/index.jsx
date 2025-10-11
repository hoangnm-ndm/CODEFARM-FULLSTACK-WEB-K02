import { createBrowserRouter, RouterProvider } from "react-router";
import authRoutes from "./authRoutes";
import clientRoutes from "./clientRoutes";
import NotFoundPage from "../pages/client/NotFoundPage";

let router = createBrowserRouter([
  // client routes
  ...clientRoutes,

  // admin routes
  // ...adminRoutes

  // auth routes
  ...authRoutes,
  { path: "*", Component: NotFoundPage },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
