import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./components/TodoList/todoListSlice"

const store = configureStore({reducer:{
    todoList: todoListReducer,
}});
export default store;