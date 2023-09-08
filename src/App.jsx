import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyTodoList from "./pages/MyTodoList";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MyTodoList />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  );
};

export default App;
