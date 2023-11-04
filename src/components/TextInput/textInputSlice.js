import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const textContent = localStorage.getItem("textContent");
  return textContent || "";
};

const textInputSlice = createSlice({
  name: "textInput",
  initialState: getInitialState(),
  reducers: {
    change: {
      prepare: (textValue) => ({ payload: { textValue } }),
      reducer: (_, action) => {
        return action.payload.textValue;
      },
    },
  },
});

export const { change } = textInputSlice.actions;
export default textInputSlice.reducer;
