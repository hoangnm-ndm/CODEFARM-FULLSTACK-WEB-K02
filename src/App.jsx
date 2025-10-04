import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  console.log(`Truoc useEffect: ${products}`);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  console.log("Sau useEffect");
  return (
    <>
      <h1>Learning useEffect</h1>
      <div id="productList">
        {products &&
          products.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <button>Mua ngay</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default App;
