import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articlesAPI = createApi({
  reducerPath: "articlesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://wp.shannonburg.fr/wp-json/wp/v2/posts/" }),
  tagTypes: ["articles"],
  endpoints: (builder) => ({
    findAll: builder.query({
      query: ({ page, category = null }) =>
        `?_embed&per_page=12${page !== undefined ? `&page=${page}` : ""}${
          category !== null ? `&categories=${category}` : ""
        }`,
    }),
    findById: builder.query({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useFindByIdQuery, useFindAllQuery } = articlesAPI;

export const commentsAPI = createApi({
  reducerPath: "commentsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://wp.shannonburg.fr/wp-json/wp/v2/comments/" }),
  tagTypes: ["comments"],
  endpoints: (builder) => ({
    findAllByPost: builder.query({
      query: (post) => `?post=${post}`,
    }),
  }),
});

export const { useFindAllByPostQuery } = commentsAPI;

export const pagesAPI = createApi({
  reducerPath: "pagesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://wp.shannonburg.fr/wp-json/wp/v2/pages/" }),
  tagTypes: ["pages"],
  endpoints: (builder) => ({
    findPageByid: builder.query({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useFindPageByidQuery } = pagesAPI;
