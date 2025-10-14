import LayoutAdmin from "../layouts/LayoutAdmin";
import ManagementProductPage from "../pages/admin/products/ManagementProductPage";

const adminRoutes = [
  {
    path: "admin",
    Component: LayoutAdmin,
    children: [{ path: "products", Component: ManagementProductPage }],
  },
];

export default adminRoutes;
