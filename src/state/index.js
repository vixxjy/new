import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "64524304d33263054b9a9e35",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
