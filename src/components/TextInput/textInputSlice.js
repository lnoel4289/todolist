import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const item = JSON.parse(localStorage.getItem("item"));
  if (item) {
  } else {
    return "";
  }
};

const textInputSlice = createSlice({
  name: "textInput",
  initialState: initialState,
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
