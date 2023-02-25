import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentplay: {},
};

export const currentplay = createSlice({
  name: "currentplay",
  initialState,
  reducers: {
    setCurrentPlay: (state, action) => {
      state.currentplay = action.payload;
    },
  },
});

export const { setCurrentPlay } = currentplay.actions;
export default currentplay.reducer;
