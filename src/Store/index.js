import { configureStore } from "@reduxjs/toolkit";
import authentication from "./auth";
import playlist from "./playlist";
import profile from "./profile";

export const store = configureStore({
  reducer: {
    auth: authentication,
    playlist: playlist,
    profile: profile,
  },
});
