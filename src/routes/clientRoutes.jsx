import LayoutClient from "../components/layout/LayoutClient";
import HomePage from "../pages/client/HomePage";

const clientRoutes = [
  {
    path: "/",
    Component: LayoutClient,
    children: [{ path: "/", Component: HomePage }],
  },
];

export default clientRoutes;
