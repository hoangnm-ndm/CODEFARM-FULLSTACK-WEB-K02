import { useEffect } from "react";
import "./App.css";
import { useProductContext } from "./contexts/productContext";

function App() {
  const { state, getProducts } = useProductContext();

  useEffect(() => {
    getProducts();
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
          {state.products.map((product) => (
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
