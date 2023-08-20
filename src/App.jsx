import "./css/App.css";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";
import TextInput from "./components/TextInput";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <TextInput />
      <TodoList />
      <DoneList />
      <Footer />
    </>
  );
}

export default App;
