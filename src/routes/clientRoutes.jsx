import { Navigate } from "react-router-dom";
import LayoutClient from "../layouts/LayoutClient";
import AboutPage from "../pages/client/AboutPage";
import ContactPage from "../pages/client/ContactPage";
import ProductDetailPage from "../pages/client/ProductDetailPage";
import ShopPage from "../pages/client/ShopPage";
import StylePage from "../pages/client/Style";

const clientRoutes = [
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      { index: true, element: <Navigate to={"/shop"} /> },
      { path: "shop", Component: ShopPage },
      { path: "/style", Component: StylePage },
      // Dynamic route
      { path: "shop/:id", Component: ProductDetailPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
    ],
  },
];

{
  /* <LayoutClient>
    <HomePage />
</LayoutClient> */
}
export default clientRoutes;
screenX;
