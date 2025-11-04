import { Link } from "react-router-dom";
import style from "./HeaderClient.module.css";

const HeaderClient = () => {
  return (
    <header>
      <ul className={style.nav}>
        <li className={style.item}>
          <Link to="/">Home</Link>
        </li>

        <li className={style.item}>
          <Link to="/register">Register</Link>
        </li>

        <li className={style.item}>
          <Link to="/login">Login</Link>
        </li>

        <li className={style.item}>
          <Link to="/admin">Trang quản trị</Link>
        </li>
      </ul>
    </header>
  );
};

export default HeaderClient;
