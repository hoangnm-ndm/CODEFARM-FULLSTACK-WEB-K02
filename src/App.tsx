import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "antd";
import api from "./api";
import "./App.css";
import Test from "./Test";

const fetchProducts = async () => {
  const { data } = await api.get("/products");
  return data.data;
};

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isPending) return <Skeleton />;
  if (error) return <p>Oops! Toang roi: {error.message}</p>;

  return (
    <>
      <Test />
      {data.map((item: any) => (
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
