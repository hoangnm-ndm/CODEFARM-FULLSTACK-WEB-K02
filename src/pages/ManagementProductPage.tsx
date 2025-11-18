import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import type { Product } from "../types/Product";
const url = "http://localhost:3000/products";

type Action = {
  type: "GET" | "INCRE" | "DECRE" | "CLEAR";
  payload: Product[];
};

type State = { products: Product[] };

const productReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "GET":
      const newState = { ...state, products: action.payload };
      return newState;

    case "CLEAR":
      return { products: [] };

    default:
      return state;
  }
  // * newState
};

const ManagementProductPage = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  const [state, dispatch] = useReducer(productReducer, { products: [] });
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(url);
      // setProducts(data);
      dispatch({ type: "GET", payload: data });
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagementProductPage;
