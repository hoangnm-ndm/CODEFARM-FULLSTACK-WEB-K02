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

import AppRoute from "./routes";

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
function App() {
  return <AppRoute />;
}

export default App;
