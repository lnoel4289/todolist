import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as todoListActions from "../TodoList/todoListSlice";
import * as doneListActions from "../DoneList/doneListSlice";
import Todo from "../Todo";

const DoneList = () => {
  const dispatch = useDispatch();
  const doneList = useSelector((state) => state.doneList);

  return (
    <div>
      <ul>
        {doneList.map((elem, index) => {
          function handleUncheck() {
            dispatch(todoListActions.add(elem));
            dispatch(doneListActions.remove(index));
          }
          function handleDeleteDone() {
            dispatch(doneListActions.remove(index));
          }
          return (
            <li key={`done${index}`}>
              <Todo
                string={elem}
                index={index}
                isChecked={true}
                handleChange={handleUncheck}
                handleDelete={handleDeleteDone}
                testId="done-list-item"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DoneList;
