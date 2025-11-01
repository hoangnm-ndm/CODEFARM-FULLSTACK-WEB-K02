import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ManagementProduct from "./pages/admin/ManagementProduct";
import ProductForm from "./pages/admin/ProductForm";
import ProtectedRoute from "./pages/admin/ProtectedRoute";
import LayoutAdmin from "./pages/admin/LayoutAdmin";
import LayoutClient from "./pages/admin/LayoutClient";

// Cach 1:
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           {/* client */}
//           <Route path="/" element={<LayoutClient />}>
//             <Route index element={<HomePage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/login" element={<LoginPage />} />
//           </Route>

//           {/* client */}
//           <Route
//             path="/admin/*"
//             element={
//               <ProtectedRoute>
//                 <LayoutAdmin />
//               </ProtectedRoute>
//             }
//           >
//             <Route index element={<ManagementProduct />} />
//             <Route path="products/add" element={<ProductForm />} />
//             <Route path="products/update/:id" element={<ProductForm />} />

//             {/* <Route path="categories" element={<ManagementProduct />} /> */}
//             {/* <Route path="categories" element={<ProductForm />} /> */}
//           </Route>
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// Cach 2:
const clientRoutes = [
  {
    path: "/",
    Component: LayoutClient,
    children: [
      { path: "/", Component: HomePage },
      { path: "/login", Component: LoginPage },
      { path: "/register", Component: RegisterPage },
    ],
  },
];

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

const router = createBrowserRouter([
  ...clientRoutes,
  ...adminRoutes,
  { path: "*", Component: NotFoundPage },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
