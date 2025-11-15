import { createContext, ReactNode, useContext, useReducer } from "react";
import api from "../apis";

export interface Products {
  id: string;
  title: string;
  description: string;
  price: number;
}

export interface StateType {
  products: Products[];
  // ...
}

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

export type ActionType = {
  type: "GET_PRODUCTS" | "ADD_PRODUCT" | "REMOVE_PRODUCT" | "UPDATE_PRODUCT";
  payload?: any;
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

const productReducer = (state: StateType, action: any) => {
  switch (action.type) {
    // Define your action cases here
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    default:
      return state;
  }
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
