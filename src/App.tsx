import { useEffect, useState } from "react";
import "./App.css";
type Product = {
  title: string;
  price: number;
  description: string;
  id?: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProduct() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  }

  useEffect(() => {
    (async () => {
      const data = await fetchProduct();
      console.log(data);
      setProducts(data);
    })();
  }, []);
  return (
    <>
      <h1>Hello TypeScript</h1>
      <p>{JSON.stringify(products)}</p>
    </>
  );
}

export default App;
