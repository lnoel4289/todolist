import React from "react";
import TodoList from "../TodoList";
import DoneList from "../DoneList";
import TextInput from "../TextInput";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <>
      <TextInput />
      <TodoList />
      <DoneList />
    </>
  );
};

export default HomePage;
