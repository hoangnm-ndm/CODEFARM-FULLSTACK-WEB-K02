import { Products } from "../types/Product";

export interface StateType {
  products: Products[];
  // ...
}

export type ActionType = {
  type: "GET_PRODUCTS" | "ADD_PRODUCT" | "REMOVE_PRODUCT" | "UPDATE_PRODUCT";
  payload?: any;
};

export const productReducer = (state: StateType, action: ActionType) => {
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
