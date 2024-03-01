import axios from "axios";
const URL = process.env.BACKEND_API;
const API = axios.create({ baseURL: URL });

// GET
export const usersGetAPI = async () => API.get("/api/users");
