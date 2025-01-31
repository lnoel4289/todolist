import { createSlice } from "@reduxjs/toolkit";
import { LangState } from "@/types/lang";

const getInitialState = (): LangState['currentLang'] => {
  const lang = localStorage.getItem("lang") as LangState['currentLang'];
  return lang || "en";
};

const langSlice = createSlice({
  name: "lang",
  initialState: getInitialState(),
  reducers: {
    change: (state: LangState['currentLang']): LangState['currentLang'] => 
      state === "en" ? "fr" : "en",
  },
});

export const { change } = langSlice.actions;
export default langSlice.reducer; 