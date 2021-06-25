import axios from "axios";

const api = axios.create({
  baseURL: "https://residencia-ecommerce.herokuapp.com/",
});

export default api;
