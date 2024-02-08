import React from "react";
import TodoList from "../../components/TodoList";
import DoneList from "../../components/DoneList";
import TextInput from "../../components/TextInput";
import { useSelector } from "react-redux";

const HomePage = () => {
  const mode = useSelector((state) => state.mode);

  return (
    <div className={mode === "dark" ? "grow dark bg-gray-700" : "grow bg-gray-100"}>
      <main className="px-5 grid gap-y-10 py-2 flex-col content-start">
        <TextInput />
        <TodoList />
        <DoneList />
      </main>
    </div>
  );
};

export default HomePage;
