import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  song: {},
};

export const songId = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSongId: (state, action) => {
      state.song = action.payload;
    },
  },
});

export const { setSongId } = songId.actions;
export default songId.reducer;
