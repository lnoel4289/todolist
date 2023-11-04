import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Todo from "../Todo";
import * as todoListActions from "../TodoList/todoListSlice";
import * as doneListActions from "../DoneList/doneListSlice";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <section>
      <ol className="grid gap-y-2">
        {todoList.map((todoListElement, index) => {
          function handleCheck() {
            dispatch(doneListActions.add(todoListElement));
            dispatch(todoListActions.remove(index));
          }
          function handleDeleteTodo() {
            dispatch(todoListActions.remove(index));
          }
          return (
            <li key={`todo${index}`}>
              <Todo
                string={todoListElement}
                index={index}
                isChecked={false}
                handleChange={handleCheck}
                handleDelete={handleDeleteTodo}
              />
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default TodoList;
