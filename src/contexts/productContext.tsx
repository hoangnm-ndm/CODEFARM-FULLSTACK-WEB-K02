import { createContext, ReactNode, useContext, useReducer } from "react";
import api from "../apis";
import { Products } from "../types/Product";
import { productReducer } from "./productReducer";

export type ProductContextType = {
  state: { products: Products[] };
  getProducts: () => void;
  removeProduct: (id: string) => void;
  addProduct: (product: Products) => void;
  updateProduct: (product: Products) => void;
};

export const initialState = {
  products: [] as Products[],
};

const ProductContext = createContext<ProductContextType | null>(null);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductContext must be used within a ProductContextProvider"
    );
  }
  return context;
};

export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async () => {
    const { data } = await api.get("/products");
    dispatch({ type: "GET_PRODUCTS", payload: data });
  };

  const removeProduct = async (id: string) => {
    await api.delete(`/products/${id}`);
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  const addProduct = async (product: Products) => {
    const { data } = await api.post("/products", product);
    dispatch({ type: "ADD_PRODUCT", payload: data });
  };

  const updateProduct = async (product: Products) => {
    const { data } = await api.patch(`/products/${product.id}`, product);
    dispatch({ type: "UPDATE_PRODUCT", payload: data });
  };

  return (
    <ProductContext.Provider
      value={{ state, getProducts, addProduct, updateProduct, removeProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
