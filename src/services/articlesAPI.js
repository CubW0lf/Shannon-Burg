import api from "./api.js";

export const findAllPosts = (page, category) =>
  api
    .posts()
    .perPage(12)
    .page(page)
    .categories(category)
    .then((data) => data)
    .catch((err) => "Désolé une erreur est survenue et nous ne pouvons pas retrouver les articles");

export const latestPost = () =>
  api
    .posts()
    .perPage(6)
    .page(1)
    .order("desc")
    .orderby("date")
    .then((data) => data)
    .catch((err) => "Désolé une erreur est survenue et nous ne pouvons pas retrouver les articles");

export const findPost = (id) =>
  api
    .posts()
    .id(id)
    .perPage(1)
    .then((data) => data)
    .catch((err) => "Désolé une erreur est survenue et nous ne pouvons pas retrouver les articles");

export const searchPost = (word) =>
  api
    .posts()
    .search(word)
    .then((data) => data)
    .catch((err) => "Désolé une erreur est survenue et nous ne pouvons pas retrouver les articles");
