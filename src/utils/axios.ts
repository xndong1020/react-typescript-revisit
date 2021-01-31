import _axios, { AxiosInstance } from "axios";

const axios: AxiosInstance = _axios.create({
  baseURL: "http://registry.npmjs.org/-/v1/",
});

export default axios;
