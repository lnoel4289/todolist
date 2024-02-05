import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const mode = JSON.parse(localStorage.getItem("mode"));
  return mode || "light";
};

const modeSlice = createSlice({
  name: "mode",
  initialState: getInitialState(),
  reducers: {
    change: (state) => (state === "light" ? "dark" : "light"),
  },
});

export const { change } = modeSlice.actions;
export default modeSlice.reducer;
