import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:3000",
});

export default api;
