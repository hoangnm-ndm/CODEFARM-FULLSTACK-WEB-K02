import api from ".";

// * https://api-class-o1lo.onrender.com/api/hoangnm/products

export const registerAuth = async (body) => {
  const { data } = await api.post("/auth/register", body);
  return data;
};

export const loginAuth = async (body) => {
  const { data } = await api.post("/auth/login", body);
  return data;
};
