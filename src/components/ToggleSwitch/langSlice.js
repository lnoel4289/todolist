import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const lang = JSON.parse(localStorage.getItem("lang"));
  return lang || "en";
};

const langSlice = createSlice({
  name: "lang",
  initialState: getInitialState(),
  reducers: {
    change: (state) => {
      if (state === "en") {
        state = "fr";
        return;
      } else if (state === "fr") {
        state = "en";
        return;
      }
      return;
    },
  },
});

export const { change } = langSlice.actions;
export default langSlice.reducer;
