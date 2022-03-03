import api from "./api.js";

export const findAllPosts = (page, category) =>
  api
    .posts()
    .perPage(12)
    .page(page)
    .categories(category)
    .then((data) => data)
    .catch((err) => "Désolé une erreur est survenue et nous ne pouvons pas retrouver les articles");

export const findPost = (id) =>
  api
    .posts()
    .id(id)
    .then((data) => data)
    .catch((err) => "Désolé une erreur est survenue et nous ne pouvons pas retrouver les articles");
