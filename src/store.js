import { configureStore } from "@reduxjs/toolkit";
import inputTextReducer from "./components/TextInput/textInputSlice";
import todoListReducer from "./components/TodoList/todoListSlice";
import doneListReducer from "./components/DoneList/doneListSlice";
import langReducer from "./components/ToggleSwitch/langSlice";
import modeReducer from "./components/ToggleSwitch/modeSlice";

const store = configureStore({
  reducer: {
    textInput: inputTextReducer,
    todoList: todoListReducer,
    doneList: doneListReducer,
    lang: langReducer,
    mode: modeReducer,
  },
});
export default store;
