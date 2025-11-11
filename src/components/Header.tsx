import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CartPopup from "./CartPopup";

const Header = () => {
  const { cart } = useCart();
  console.log(cart);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li className="cart-icon">
            <Link to={"/"}>
              <i className="fa-solid fa-cart-plus"></i>
              <CartPopup />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
