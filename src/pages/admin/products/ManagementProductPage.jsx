import { useEffect, useState } from "react";
import { getProducts } from "../../../api/apiProduct";

const ManagementProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getProducts();
      setProducts(data);
    })();

    // IIFE = Immediately Invoked Function Expression
  }, []);
  return <div>{JSON.stringify(products)}</div>;
};

export default ManagementProductPage;
