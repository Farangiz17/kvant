import axios from "axios";

export const baseDomain = "http://localhost:3001/";

const clinet = axios.create({
  baseURL: baseDomain,
  headers: "Header",
});

export default clinet;
