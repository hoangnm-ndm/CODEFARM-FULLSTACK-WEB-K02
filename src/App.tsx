import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getProducts } from "./features/productSlice";
import ComponentA from "./pages/ComponentA";
import { AppDispatch, RootState } from "./store";

function App() {
  // const { state, getProducts } = useProductContext();

  const { products } = useSelector((state: RootState) => state.product);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // getProducts();
    // fetch API thay cho data fake
    const payload = [
      { id: 1, title: "Product 1", price: 100, description: "mo ta" },
    ];

    dispatch(getProducts(payload));
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <ComponentA />
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
