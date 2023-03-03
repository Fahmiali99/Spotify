import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topartists: {},
};

export const topartists = createSlice({
  name: "topartists",
  initialState,
  reducers: {
    setTopArtists: (state, action) => {
      state.topartists = action.payload;
    },
  },
});

export const { setTopArtists } = topartists.actions;
export default topartists.reducer;
