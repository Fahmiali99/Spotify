import { configureStore } from "@reduxjs/toolkit";
import authentication from "./auth";
import playlist from "./playlist";
import profile from "./profile";
import selected from "./selected";
import currentplay from "./currentplay";
import topartists from "./topartists";

export const store = configureStore({
  reducer: {
    auth: authentication,
    playlist: playlist,
    profile: profile,
    selected: selected,
    currentplay: currentplay,
    topartists: topartists,
  },
});
