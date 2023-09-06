import { configureStore } from "@reduxjs/toolkit";
import inputTextReducer from "./components/TextInput/textInputSlice";
import todoListReducer from "./components/TodoList/todoListSlice";
import doneListReducer from "./components/DoneList/doneListSlice";

const store = configureStore({
  reducer: {
    textInput: inputTextReducer,
    todoList: todoListReducer,
    doneList: doneListReducer,
  },
});
export default store;
