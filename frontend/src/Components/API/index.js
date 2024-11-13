import axios from "axios";

const API_PREFIX = "http://localhost:7000/portal/v1";

const API = {
  GET: async (url) => {
    console.log("calling GET...", `${API_PREFIX}${url}`);
    return axios.get(`${API_PREFIX}${url}`);
  },

  POST: (url, body) => {
    console.log("calling POST...", `${API_PREFIX}${url}`);
    return axios.post(`${API_PREFIX}${url}`, body);
  },

  PUT: (url, body) => {
    console.log("calling PUT...", `${API_PREFIX}${url}`);
    return axios.put(`${API_PREFIX}${url}`, body);
  },

  DELETE: (url) => {
    console.log("calling DELETE...", `${API_PREFIX}${url}`);
    return axios.delete(`${API_PREFIX}${url}`);
  },
};

export default API;
