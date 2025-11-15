import { Product } from "../types/Product";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },

    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },

    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },

    updateProduct(state, action: PayloadAction<Product>) {
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    },
  },
});

export const { getProducts, addProduct, removeProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
