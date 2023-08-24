import React from "react";
import TodoList from "../TodoList";
import DoneList from "../DoneList";
import TextInput from "../TextInput";
import Header from "../Header";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <TextInput />
      <TodoList />
      <DoneList />
      <Footer />
    </>
  );
};

export default HomePage;
