import { useSelector } from "react-redux";
import Todo from "../Todo";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div className="">
      <h2>Todo :</h2>
      <ol>
        {todoList.map((todo, index) => {
          return (
            <li key={`todo${index}`}>
              <Todo todo={todo} index={index} isChecked={false} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TodoList;
