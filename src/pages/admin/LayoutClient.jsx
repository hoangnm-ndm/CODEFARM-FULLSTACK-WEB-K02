import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutClient = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/register">register</Link>
          </li>

          <li>
            <Link to="/login">login</Link>
          </li>

          <li>
            <Link to="/admin">Ban la admin?</Link>
          </li>
        </ul>
      </header>

      <Outlet />
    </div>
  );
};

export default LayoutClient;
