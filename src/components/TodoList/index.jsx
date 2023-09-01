import { useSelector } from "react-redux";
import Todo from "../Todo";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div>
      TODOLIST COMPONENT
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li key={`todo${index}`}>
              <Todo todo={todo} index={index} checked={false} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
