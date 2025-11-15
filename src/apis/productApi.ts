import api from ".";
import { Product } from "../types/Product";

export const getProductsAPI = async () => {
  const { data } = await api.get("/products");
  return data;
};

export const getProductByIdAPI = async (id: number) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const createProductAPI = async (product: Product) => {
  const { data } = await api.post("/products", product);
  return data;
};

export const updateProductAPI = async (id: number, product: Product) => {
  const { data } = await api.put(`/products/${id}`, product);
  return data;
};

export const removeProductAPI = async (id: number) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};
