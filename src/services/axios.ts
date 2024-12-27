import axios from "axios";

const API = axios.create({
  baseURL: "http://103.119.100.243:3000", // Default to localhost for development
  withCredentials: true, // Include credentials if needed
});

console.log("API URL: ", API.defaults.baseURL);

export default API;
