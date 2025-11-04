import { Link } from "react-router-dom";
import st from "./HeaderClient.module.css";

const HeaderClient = () => {
  return (
    <header>
      <ul className={st.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/admin">Trang quản trị</Link>
        </li>
      </ul>
    </header>
  );
};

export default HeaderClient;
