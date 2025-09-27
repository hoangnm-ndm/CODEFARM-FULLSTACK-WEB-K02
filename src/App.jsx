import { useState } from "react";
import { products } from "../data";

// * const [state, setState] = useState(0) -> Sai: Khong duoc viet hook ngoai component.

const App = () => {
  const [cart, setCart] = useState([]);

  // [
  //   { id: 1, name: "product A", price: 200, quantity: 1 },
  //   { id: 2, name: "product B", price: 300, quantity: 3 },
  // ];

  function handleAddToCart(product) {
    console.log(product);
    // * tang so luong san pham trong gio hang
    // let checkProduct = cart.find((item) => item.id === product.id);

    // if (checkProduct) {
    //   // Neu da co san pham trong gio hang.
    //   // Tang quantity len
    //   const newCart = cart.map((item) =>
    //     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    //   );
    //   setCart(newCart);
    //   localStorage.setItem("cart", JSON.stringify(newCart));
    // } else {
    //   // Chua co san pham nay trong gio hang
    //   const newCart = [...cart, { ...product, quantity: 1 }];
    //   setCart(newCart);
    //   localStorage.setItem("cart", JSON.stringify(newCart));
    // }

    const newCart = cart.find((item) => item.id === product.id)
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    let totalCost = newCart.reduce((acc, cur) => {
      return (acc += cur.price);
    }, 0);
    // * Tinh lai tong so luong va tong tien
  }
  return (
    <>
      <header>
        <p>
          Gio hang: {} - Tong tien: {}{" "}
        </p>
      </header>
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
