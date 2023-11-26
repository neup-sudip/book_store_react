import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
  withCredentials: true,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    // Authorization: Cookies.get("auth"),
  },
});

instance.interceptors.response.use((response) => {
  if (response?.data?.status === 401) {
    localStorage.removeItem("persist:root");
  }
  return response;
});

export const deleteApi = (url) => instance.delete(url);

export const getApi = ({ url }) => instance.get(url);

export const putApi = ({ url, data }) => instance.put(url, data);

export const postApi = ({ url, data }) => instance.post(url, data);

export const patchApi = ({ url, data }) => instance.patch(url, data);
