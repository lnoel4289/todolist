import React from "react";
import Done from "../Done";
import { useSelector } from "react-redux";

const DoneList = () => {
  const doneList = useSelector((state) => state.doneList);

  return (
    <div>
      DONELIST COMPONENT
      <ul>
        {doneList.map((done, index) => {
          return (
            <li key={`done${index}`}>
              <Done index={index} done={done} checked={true} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DoneList;
