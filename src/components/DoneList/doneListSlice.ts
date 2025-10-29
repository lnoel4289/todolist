import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getInitialState = (): string[] => {
  const doneList = localStorage.getItem("doneList");
  return doneList ? JSON.parse(doneList) : [];
};

interface AddPayload {
  textContent: string;
}

interface RemovePayload {
  index: number;
}

const doneListSlice = createSlice({
  name: "doneList",
  initialState: getInitialState(),
  reducers: {
    add: {
      prepare: (textContent: string) => ({ 
        payload: { textContent } 
      }),
      reducer: (state: string[], action: PayloadAction<AddPayload>) => {
        state.unshift(action.payload.textContent);
      },
    },
    remove: {
      prepare: (index: number) => ({ 
        payload: { index } 
      }),
      reducer: (state: string[], action: PayloadAction<RemovePayload>) => {
        return state.filter((_, idx) => idx !== action.payload.index);
      },
    },
  },
});

export const { add, remove } = doneListSlice.actions;
export default doneListSlice.reducer; 