import { useDispatch } from "react-redux";
import * as todoListActions from "../TodoList/todoListSlice";
import * as doneListActions from "../DoneList/doneListSlice";

const Todo = ({ todo, index, checked }) => {
  const dispatch = useDispatch();
  function handleCheck() {
    dispatch(doneListActions.add(todo));
    dispatch(todoListActions.remove(index));
  }

  function handleDelete() {
    dispatch(todoListActions.remove(index));
  }

  return (
    <div>
      {index + 1} {todo}{" "}
      <input type="checkbox" checked={checked} onChange={handleCheck} />{" "}
      <i class="fa-solid fa-trash" onClick={handleDelete} />
    </div>
  );
};

export default Todo;
