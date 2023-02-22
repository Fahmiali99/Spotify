import { createSlice } from "@reduxjs/toolkit";

export const authentication = createSlice({
  name: "auth",
  initialState: {
    isAuthorized: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.isAuthorized = action.payload;
    },
    removeToken: (state) => {
      state.isAuthorized = "";
    },
  },
});

export const { setToken, removeToken } = authentication.actions;
export default authentication.reducer;
