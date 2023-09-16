import { useSelector, useDispatch } from "react-redux";
import Todo from "../Todo";
import * as todoListActions from "../TodoList/todoListSlice";
import * as doneListActions from "../DoneList/doneListSlice";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  return (
    <div>
      <ol className="grid gap-y-2">
        {todoList.map((elem, index) => {
          function handleCheck() {
            dispatch(doneListActions.add(elem));
            dispatch(todoListActions.remove(index));
          }
          function handleDeleteTodo() {
            dispatch(todoListActions.remove(index));
          }
          return (
            <li key={`todo${index}`}>
              <Todo
                string={elem}
                index={index}
                isChecked={false}
                handleChange={handleCheck}
                handleDelete={handleDeleteTodo}
                testId="todo-list-item"
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TodoList;
