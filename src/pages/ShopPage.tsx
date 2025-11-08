import React, { useState } from "react";

interface Product {
  title: string;
  description: string;
  price: number;
}

// function useState1<T>(initialState: T): T {
//   let state = initialState

//   function setState(newState) {

//   }
//   return [state, setState];
// }

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  return <div>ShopPage</div>;
};

export default ShopPage;
