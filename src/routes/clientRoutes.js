import LayoutClient from "../layouts/LayoutClient";
import AboutPage from "../pages/client/AboutPage";
import ContactPage from "../pages/client/ContactPage";
import HomePage from "../pages/client/HomePage";
import ProductDetailPage from "../pages/client/ProductDetailPage";
import ShopPage from "../pages/client/ShopPage";

const clientRoutes = [
  {
    path: "/",
    Component: LayoutClient,
    children: [
      { index: true, Component: HomePage },
      { path: "shop", Component: ShopPage },
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
