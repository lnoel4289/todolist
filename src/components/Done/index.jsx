import { useDispatch } from "react-redux";
import * as todoListActions from "../TodoList/todoListSlice";
import * as doneListActions from "../doneList/doneListSlice";

const Done = ({ done, checked }) => {
  const dispatch = useDispatch();
  function handleUncheck() {
    dispatch(todoListActions.add(done));
    dispatch(doneListActions.remove(done));
  }

  return (
    <div>
      {done}{" "}
      <input type="checkbox" checked={checked} onChange={handleUncheck} />
    </div>
  );
};

export default Done;
