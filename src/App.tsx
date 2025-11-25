import { useEffect, useState } from "react";
import "./App.css";
import api from "./api";
import type { Product } from "./types/Product";

const fetchProducts = async () => {
  const { data } = await api.get("/productss");
  return data;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts();
        if (data.data.length !== 0) {
          setProducts(data.data);
        } else {
          setError("Khong co san pham nao!");
        }
      } catch (error) {
        console.log(error);
        setError("Loi trong qua trinh lay danh sach san pham!");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops! Toang roi: {error}</p>;

  return (
    <>
      {products.map((item) => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
