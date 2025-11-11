import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

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
          <li>
            <Link to={"/"}>
              <i className="fa-solid fa-cart-plus"></i>
              {/* <span>{quantity}</span> */}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
