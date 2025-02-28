import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProductsAPI = () => API.get("/products");

export const loginUserAPI = (userData) => {
  return API.post("/auth/login", JSON.stringify(userData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const fetchUserDataAPI = () => API.get(`/users`);
export const fetchSingleProductAPI = (productID) =>
  API.get(`/products/${productID}`);
