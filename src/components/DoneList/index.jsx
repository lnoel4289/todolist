import React from "react";
import Done from "../Done";
import { useSelector } from "react-redux";

const DoneList = () => {
  const doneList = useSelector((state) => state.doneList);

  return (
    <div>
      DoneList Component
      <ul>
        {doneList.map((done, index) => {
          return (
            <li key={`done${index}`}>
              <Done index={index} done={done} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DoneList;
