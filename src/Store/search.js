import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: " ",
  searchItem: false,
};

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuerySearch: (state, action) => {
      state.searchQuery = action.payload;
      state.searchItem = true;
    },
  },
});

export const { setQuerySearch } = search.actions;
export default search.reducer;
