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

// PUT
export const newPutAPI = async (data: any, id: any) =>
    API.put(`/api/news/${id}/`, data);

// DELETE
export const newDeleteAPI = async ({ id }: { id: any }) =>
    API.delete(`/api/news/${id}/`);

// GET BY ID
export const newGetOneAPI = async ({ id }: { id: any }) =>
    API.get(`/api/news/${id}/`);
