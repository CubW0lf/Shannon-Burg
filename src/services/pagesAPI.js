import api from "./api.js";

export const findPage = (id) =>
  api
    .pages()
    .id(id)
    .then((data) => data)
    .catch((err) => "Désolé une erreur est survenue et nous ne pouvons pas retrouver les articles");
