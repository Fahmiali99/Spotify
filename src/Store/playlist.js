import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: {},
};

export const playlist = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
  },
});

export const { setPlaylist } = playlist.actions;
export default playlist.reducer;
