import { configureStore } from "@reduxjs/toolkit";
import authentication from "./auth";
import playlist from "./playlist";
import profile from "./profile";
import selected from "./selected";
import currentplay from "./currentplay";
import topartists from "./topartists";
import search from "./search";
import songId from "./songId";

export const store = configureStore({
  reducer: {
    auth: authentication,
    playlist: playlist,
    profile: profile,
    songId: songId,
    currentplay: currentplay,
    topartists: topartists,
    search: search,
    selected: selected,
  },
});
