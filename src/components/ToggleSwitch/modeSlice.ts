import { createSlice } from "@reduxjs/toolkit";
import { ModeState } from "@/types/mode";

const getInitialState = (): ModeState['currentMode'] => {
  const mode = localStorage.getItem("mode") as ModeState['currentMode'];
  return mode || "light";
};

const modeSlice = createSlice({
  name: "mode",
  initialState: getInitialState(),
  reducers: {
    change: (state: ModeState['currentMode']): ModeState['currentMode'] => 
      state === "light" ? "dark" : "light",
  },
});

export const { change } = modeSlice.actions;
export default modeSlice.reducer; 