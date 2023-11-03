import { createSlice } from "@reduxjs/toolkit";

const initialState = ""

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
