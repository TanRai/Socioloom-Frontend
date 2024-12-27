import axios from "axios";

const API = axios.create({
  baseURL: process.env.VITE_REACT_APP_API_URL || "http://localhost:3000", // Fallback to localhost
  withCredentials: true, // Include credentials if needed
});

export default API;
