import React from "react";
import Done from "../Done";
import { useSelector } from "react-redux";

const DoneList = () => {
  const doneList = useSelector((state) => state.doneList);

  return (
    <div>
      <h2>Done :</h2>
      <ul>
        {doneList.map((done, index) => {
          return (
            <li key={`done${index}`}>
              <Done done={done} index={index} isChecked={true} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DoneList;
