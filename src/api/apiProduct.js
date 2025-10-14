import api from ".";

export const getProducts = async () => {
  // * https://api-class-o1lo.onrender.com/api/hoangnm/products
  const { data } = await api.get("/products");
  return data;
};
