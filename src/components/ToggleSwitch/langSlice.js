import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const lang = localStorage.getItem("lang");
  return lang || "en";
};

const langSlice = createSlice({
  name: "lang",
  initialState: getInitialState(),
  reducers: {
    change: (state) => (state === "en" ? "fr" : "en"),
  },
});

export const { change } = langSlice.actions;
export default langSlice.reducer;
