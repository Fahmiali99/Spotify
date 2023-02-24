import { configureStore } from "@reduxjs/toolkit";
import authentication from "./auth";
import playlist from "./playlist";
import profile from "./profile";
import selected from "./selected";

export const store = configureStore({
  reducer: {
    auth: authentication,
    playlist: playlist,
    profile: profile,
    selected: selected,
  },
});
