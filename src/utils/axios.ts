import _axios from "axios";

const axios = _axios.create({
  baseURL: "http://registry.npmjs.org/-/v1/",
});

export default axios;
