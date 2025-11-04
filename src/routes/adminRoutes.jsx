import ManagementProduct from "../pages/admin/ManagementProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import LayoutAdmin from "../components/layout/LayoutAdmin";

const adminRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <LayoutAdmin />
      </ProtectedRoute>
    ),
    children: [{ path: "products", Component: ManagementProduct }],
  },
];

export default adminRoutes;
