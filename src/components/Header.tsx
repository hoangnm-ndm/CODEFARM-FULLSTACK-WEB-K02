import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const user = useContext(AuthContext);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Shop</Link>
          </li>
          <li>
            {user.email ? (
              <p>Xin chao {user.email}</p>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
