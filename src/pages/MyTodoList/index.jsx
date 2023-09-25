import React from "react";
import TodoList from "../../components/TodoList";
import DoneList from "../../components/DoneList";
import TextInput from "../../components/TextInput";

const HomePage = () => {
  return (
    <main className="px-5 grid gap-y-4">
      <TextInput />
      <TodoList />
      <DoneList />
    </main>
  );
};

export default HomePage;
