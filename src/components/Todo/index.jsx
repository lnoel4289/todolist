import { useDispatch } from "react-redux";
import * as todoListActions from "../TodoList/todoListSlice";
import * as doneListActions from "../DoneList/doneListSlice";

const Todo = ({ todo, index, isChecked }) => {
  const dispatch = useDispatch();
  function handleCheck() {
    dispatch(doneListActions.add(todo));
    dispatch(todoListActions.remove(index));
  }

  function handleDelete() {
    dispatch(todoListActions.remove(index));
  }

  return (
    <div data-testid="todo-list-item">
      {todo}{" "}
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />{" "}
      <i className="fa-solid fa-trash" onClick={handleDelete} />
    </div>
  );
};

export default Todo;
