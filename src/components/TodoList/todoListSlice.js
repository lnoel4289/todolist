import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: ["todo1", "todo2", "todo3"],
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

export const { add, remove } = todoListSlice.actions;
export default todoListSlice.reducer;
