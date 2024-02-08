import { useEffect } from "react";

const ToggleSwitch = ({ id, text, state, handleChange, isChecked }) => {
  useEffect(() => {
    localStorage.setItem(id, state);
  },[state]);

  return (
    <div className="flex items-center justify-center">
      <label htmlFor={id} className="relative h-4 w-8">
        <input
          type="checkbox"
          id={id}
          checked = {isChecked}
          onChange={handleChange}
          className="w-0 h-0 opacity-0 peer"
        ></input>
        <span className="absolute inset-0 bg-gray-400 rounded-full cursor-pointer before:flex before:absolute before:w-3 before:h-3 before:rounded-full before:bg-white before:top-0.5 before:left-0.5 before:duration-300 before:peer-checked:translate-x-4"></span>
      </label>
      <span>{text}</span>
    </div>
  );
};

export default ToggleSwitch;
