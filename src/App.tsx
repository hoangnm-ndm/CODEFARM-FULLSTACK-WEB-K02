import { useContext, useEffect } from "react";
import "./App.css";
import { ProductContext, ProductContextType } from "./contexts/productContext";
import axios from "axios";

function App() {
  const { state, dispatch } = useContext<ProductContextType>(ProductContext);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    console.log(data);
    dispatch({ type: "GET_PRODUCTS", payload: data });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      {JSON.stringify(state.products)}
    </>
  );
}

export default App;
