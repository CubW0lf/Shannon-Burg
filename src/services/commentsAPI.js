import api from "./api.js";

export const findAllComments = (id) =>
  api
    .comments()
    .then((data) => data)
    .catch((err) => "Désolé une erreur est survenue et nous ne pouvons pas retrouver les commentaires");
