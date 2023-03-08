import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: {},
  playlistForm: {
    title: "",
    description: "",
  },
};

export const playlist = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
    setPlaylistForm: (state, action) => {
      state.playlistForm = action.payload;
    },
  },
});

export const { setPlaylist, setPlaylistForm } = playlist.actions;
export default playlist.reducer;
