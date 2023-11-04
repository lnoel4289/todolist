import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const doneList = JSON.parse(localStorage.getItem("doneList"));
  return doneList || [];
};

const doneListSlice = createSlice({
  name: "doneList",
  initialState: getInitialState(),
  reducers: {
    add: {
      prepare: (textContent) => ({ payload: { textContent } }),
      reducer: (state, action) => {
        state.unshift(action.payload.textContent);
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

export const { add, remove } = doneListSlice.actions;
export default doneListSlice.reducer;
