import { createSlice } from "@reduxjs/toolkit";

const doneListSlice = createSlice({
  name: "doneList",
  initialState: [],
  reducers: {
    add: {
      prepare: (textContent) => ({ payload: { textContent } }),
      reducer: (state, action) => {
        state.unshift(action.payload.textContent);
      },
    },
    remove: {
      prepare: (textContent) => ({ payload: { textContent } }),
      reducer: (state, action) => {
        return state.filter((elem) => elem !== action.payload.textContent);
      },
    },
  },
});

export const { add, remove } = doneListSlice.actions;
export default doneListSlice.reducer;