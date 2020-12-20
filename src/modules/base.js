import axios from "axios";

export const baseURL = `http://localhost:3001`; // Soon to be transfer to dot env

export const axiosInstance = axios.create({
  baseURL: baseURL,
});
