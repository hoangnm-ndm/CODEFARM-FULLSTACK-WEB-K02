import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  // useParams
  const { id } = useParams();
  console.log(id);

  return <div>ProductDetailPage</div>;
};

export default ProductDetailPage;
