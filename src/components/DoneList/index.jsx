import React from "react";
import Done from "../Done";

const DoneList = () => {
  const doneList = ["done1", "done2", "done3"];

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
