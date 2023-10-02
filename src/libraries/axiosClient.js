import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'https://employees-8j8c.onrender.com',
  headers: { "Content-Type": "application/json" },
});

export default axiosClient;
