import { useDispatch } from "react-redux";
import * as todoListActions from "../TodoList/todoListSlice";
import * as doneListActions from "../DoneList/doneListSlice";

const Done = ({ done, checked, index }) => {
  const dispatch = useDispatch();
  function handleUncheck() {
    dispatch(todoListActions.add(done));
    dispatch(doneListActions.remove(index));
  }

  function handleDelete() {
    dispatch(doneListActions.remove(index));
  }

  return (
    <div data-testid="done-list-item">
      {done}{" "}
      <input type="checkbox" checked={checked} onChange={handleUncheck} />
      <i class="fa-solid fa-trash" onClick={handleDelete} />
    </div>
  );
};

export default Done;
