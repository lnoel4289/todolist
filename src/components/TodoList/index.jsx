import { useSelector } from "react-redux";
import Todo from "../Todo";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div>
      TODOList Component
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li key={index}><Todo todo={todo} index={index} /></li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
