import { useState } from "react";
import { products } from "../data";

// * const [state, setState] = useState(0) -> Sai: Khong duoc viet hook ngoai component.

const App = () => {
  const cartLocalStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  const [cart, setCart] = useState({
    cart: cartLocalStorage.cart || [],
    totalCost: cartLocalStorage.totalCost || 0,
    count: cartLocalStorage.count || 0,
  });

  function saveCart(cart) {
    const payload = {
      cart: cart,
      totalCost: cart.reduce((acc, cur) => {
        acc += cur.price * cur.quantity;
        return acc;
      }, 0),
      count: cart.reduce((acc, cur) => {
        acc += cur.quantity;
        return acc;
      }, 0),
    };
    setCart(payload);
    localStorage.setItem("cart", JSON.stringify(payload));
  }
  function handleAddToCart(product) {
    const newCart = cart.cart.find((item) => item.id === product.id)
      ? cart.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart.cart, { ...product, quantity: 1 }];

    saveCart(newCart);
    // * Tinh lai tong so luong va tong tien
  }

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    const newCart = cart.cart.find((item) => item.id === id)
      ? cart.cart.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
      : cart.cart;
    saveCart(newCart);
  };

  return (
    <>
      {/* {!![].length || <>hihi</>} */}
      <header>
        <p>
          Gio hang: {cart.count} - Tong tien: {cart.totalCost}
        </p>
      </header>
      <h2>gio hang</h2>
      <div>
        {cart.cart.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button onClick={() => handleAddToCart(item)}>Add to cart</button>
          </div>
        ))}
      </div>
      <h2>san pham</h2>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button onClick={() => handleAddToCart(item)}>Add to cart</button>
        </div>
      ))}
    </>
  );
};

export default App;
