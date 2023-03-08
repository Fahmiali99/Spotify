import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: {},
  selectedPlaylistId: "",
};

export const selected = createSlice({
  name: "selected",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelected, setSelectedPlaylistId } = selected.actions;
export default selected.reducer;
