import { configureStore } from "@reduxjs/toolkit";
import authentication from "./auth";
import playlist from "./playlist";

export const store = configureStore({
  reducer: {
    auth: authentication,
    playlist: playlist,
  },
});
