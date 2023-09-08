import { useDispatch } from "react-redux";
import * as todoListActions from "../TodoList/todoListSlice";
import * as doneListActions from "../DoneList/doneListSlice";

const Done = ({ done, index, isChecked }) => {
  const dispatch = useDispatch();
  function handleUncheck() {
    dispatch(todoListActions.add(done));
    dispatch(doneListActions.remove(index));
  }

  function handleDelete() {
    dispatch(doneListActions.remove(index));
  }

  return (
    <div data-testid="done-list-item" className="flex">
      <div>{done}</div>
      <div className="flex items-center">
        <input type="checkbox" checked={isChecked} onChange={handleUncheck} />
        <i className="fa-solid fa-trash" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Done;
