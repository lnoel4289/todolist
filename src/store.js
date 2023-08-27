import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./components/TodoList/todoListSlice";
import inputTextReducer from "./components/TextInput/textInputSlice";

const store = configureStore({
  reducer: {
    todoList: todoListReducer,
    textInput: inputTextReducer,
  },
});
export default store;

console.log(store.getState());
