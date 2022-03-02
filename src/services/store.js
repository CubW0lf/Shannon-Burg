import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { articlesAPI, commentsAPI, pagesAPI } from "./wordpress.js";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [articlesAPI.reducerPath]: articlesAPI.reducer,
    [commentsAPI.reducerPath]: commentsAPI.reducer,
    [pagesAPI.reducerPath]: pagesAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesAPI.middleware, commentsAPI.middleware, pagesAPI.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
