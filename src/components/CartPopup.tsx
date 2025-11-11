import React from "react";
import { useCart } from "../contexts/CartContext";

const CartPopup = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.price}</td>
              <td onClick={() => removeFromCart(item.id)}>X</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartPopup;
