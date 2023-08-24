import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    create(state, action) {
      state.unshift(action.payload);
    },
    check(state, action) {
      state.filter((elt) => elt !== action.payload);
    },
    suppress(state, action) {
      state.filter((elt) => elt !== action.payload);
    },
  },
});

export const { create, check, suppress } = actions;
export default reducer;
