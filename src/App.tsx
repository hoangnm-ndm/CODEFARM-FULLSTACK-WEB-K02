import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getProducts } from "./features/productSlice";
import { AppDispatch, RootState } from "./store";
import { getProductsAPI } from "./apis/productApi";

function App() {
  const { products } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    (async () => {
      dispatch(getProducts(await getProductsAPI()));
    })();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <button>Delete</button>
                <button>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
