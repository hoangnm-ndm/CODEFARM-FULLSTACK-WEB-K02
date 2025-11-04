import React from "react";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="products">Product</Link>
        </li>
        <li>
          <Link to="Category">Category</Link>
        </li>
      </ul>
    </header>
  );
};

export default HeaderAdmin;
