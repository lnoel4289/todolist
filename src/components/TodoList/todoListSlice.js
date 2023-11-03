import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const item = JSON.parse(localStorage.getItem("item"));
  return item || [];
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState: getInitialState(),
  reducers: {
    add: {
      prepare: (textContent) => ({ payload: { textContent } }),
      reducer: (state, action) => {
        state.push(action.payload.textContent);
      },
    },
    remove: {
      prepare: (index) => ({ payload: { index } }),
      reducer: (state, action) => {
        return state.filter((_, index) => index !== action.payload.index);
      },
    },
  },
});

export const { add, remove } = todoListSlice.actions;
export default todoListSlice.reducer;
