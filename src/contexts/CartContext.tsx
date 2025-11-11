import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Product } from "../types/Product";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Loi context!");
  return context;
};

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const addToCart = (product: Product) => {
    // * nếu có sản phẩm thì cập nhật quantity lên 1.
    // * nếu chưa có thì thêm product vào với quantity = 1
    const newCart = () => {
      const existProduct = cart.find((item) => item.id === product.id);
      if (existProduct) {
        const newCart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return newCart;
      }
      return [...cart, { ...product, quantity: 1 }];
    };
    setCart(newCart);
  };
  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
