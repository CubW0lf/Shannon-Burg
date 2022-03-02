import axios from "axios";
import api from "./api.js";

export const findAll = () => {
  return axios.get(`${api}/posts?_embed&per_page=12&page=1`).then(({ data }) => data);
};
