import api from "./api.js";

export const findAllCategories = () =>
  api
    .categories()
    .then((data) => data)
    .catch((err) => "Désolé une erreur est survenue et nous ne pouvons pas retrouver les articles");

export const findCategory = (id) =>
  api
    .categories()
    .id(id)
    .then((data) => data)
    .catch((err) => "Désolé une erreur est survenue et nous ne pouvons pas retrouver les articles");
