import React from "react";
import TodoList from "../../components/TodoList";
import DoneList from "../../components/DoneList";
import TextInput from "../../components/TextInput";

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
