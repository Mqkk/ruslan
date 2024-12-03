import axios from "axios";
import store from "@/vuex/store";
import router from "@/router/router";

const api = axios.create({
  baseURL: "http://5.35.98.171:8000/api/v1/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();

      store.commit("SET_TOKEN", null);
      store.commit("SET_USER", null);

      router.push("/");
    }
    return Promise.reject(error);
  }
);

export default api;
