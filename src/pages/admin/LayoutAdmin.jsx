import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div>
      <h1>Hello Admin</h1>

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

      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
