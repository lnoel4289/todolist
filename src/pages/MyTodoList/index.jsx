import React from "react";
import TodoList from "../../components/TodoList";
import DoneList from "../../components/DoneList";
import TextInput from "../../components/TextInput";
import { useSelector } from "react-redux";
import data from "../../data/lang";

const HomePage = () => {
  const mode = useSelector((state) => state.mode);
  const lang = useSelector((state) => state.lang);
  const text = lang === "en" ? data.en : data.fr;

  return (
    <div className={mode === "dark" ? "grow dark bg-gray-700" : "grow bg-gray-50"}>
      <main className="px-3 xs:px-5 grid gap-y-10 py-2 flex-col content-start">
        <TextInput text={text} />
        <TodoList />
        <DoneList text={text}/>
      </main>
    </div>
  );
};

export default HomePage;
