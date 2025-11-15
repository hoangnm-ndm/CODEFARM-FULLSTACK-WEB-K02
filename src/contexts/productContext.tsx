import { createContext, ReactNode, useReducer } from "react";

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
  dispatch?: React.Dispatch<ActionType>;
};

export const initialState = {
  products: [] as Products[],
};

export type ActionType = {
  type: "GET_PRODUCTS" | "ADD_PRODUCT" | "REMOVE_PRODUCT" | "UPDATE_PRODUCT";
  payload?: any;
};

export const ProductContext = createContext<ProductContextType | null>(null);

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

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
