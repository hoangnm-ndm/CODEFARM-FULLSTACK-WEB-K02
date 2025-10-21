import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://api-class-o1lo.onrender.com/api/example/products`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const { data } = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      Danb sach san pham
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {products &&
          products.map((item) => (
            <div key={item._id}>
              <img src={item.thumbnail} alt="" style={{ height: 100 }} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <Link to={`/shop/${item._id}`}>Xem chi tiet</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShopPage;
