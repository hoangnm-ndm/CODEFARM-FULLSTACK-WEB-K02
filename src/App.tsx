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
      </table>
    </>
  );
}

export default App;
