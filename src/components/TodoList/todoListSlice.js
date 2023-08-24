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
    remove(state, action) {
      state.filter((elt) => elt !== action.payload);
    },
  },
});

export const { create, check, remove } = actions;
export default reducer;
