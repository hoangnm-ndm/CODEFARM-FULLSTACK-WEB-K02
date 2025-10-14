import api from ".";

// * https://api-class-o1lo.onrender.com/api/hoangnm/products

export const getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

export const getProductDetail = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const createProduct = async (body) => {
  const { data } = await api.post(`/products`, body);
  return data;
};

export const updateProduct = async (id, body) => {
  const { data } = await api.patch(`/products/${id}`, body);
  return data;
};

export const removeProduct = async (id) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};
