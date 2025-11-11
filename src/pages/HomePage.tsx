import React, { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import axios from "axios";
import { useCart } from "../contexts/CartContext";

const url = "https://dummyjson.com/products";

const HomePage = () => {
  const { cart, addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(url);
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };
  return (
    <div>
      {products.length !== 0
        ? products.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>Price: {item.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(item)}
              >
                Add to cart
              </button>
            </div>
          ))
        : "Khong co san pham nao!"}
    </div>
  );
};

export default HomePage;
