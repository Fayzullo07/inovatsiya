import axios from "axios";
const URL = process.env.BACKEND_API;
const API = axios.create({ baseURL: URL });

// const config = {
//   headers: {
//     Authorization: "Bearer " + JSON.parse(localStorage.getItem("user"))?.access,
//   },
// };

// -----------------------------------------NEWS-----------------------------
// GET
export const newsGetAPI = async ({ search = "" }) =>
    API.get(`/api/news/?search=${search}`);

// POST
export const newPostAPI = async (data: any) =>
    API.post(`/api/news`, data);

// GET BY ID
export const newGetOneAPI = async ({ id }: { id: any }) =>
    API.get(`/api/news/${id}/`);
