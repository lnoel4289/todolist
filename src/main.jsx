import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyTodoList from "./components/MyTodoList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyTodoList />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
