import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://api-class-o1lo.onrender.com/api/hoangnm",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
