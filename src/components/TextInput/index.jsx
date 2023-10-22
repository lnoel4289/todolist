import React from "react";
import * as textInputActions from "../TextInput/textInputSlice";
import * as todoListActions from "../TodoList/todoListSlice";
import { useDispatch, useSelector } from "react-redux";

const TextInput = () => {
  const dispatch = useDispatch();
  const textContent = useSelector((state) => state.textInput);

  const handleChange = (e) => {
    dispatch(textInputActions.change(e.target.value));
  };
  const handleReset = () => dispatch(textInputActions.change(""));
  const handleSubmit = () => {
    dispatch(todoListActions.add(textContent));
  };

  return (
    <>
      <form>
        <label htmlFor="todoTextInput" className="p-1 font-semibold">
          Enter a task to do here <i className="fa-solid fa-arrow-down"></i>
        </label>
        <div className="flex border border-white bg-transparent p-1">
          <div className="w-full">
            <textarea
              id="todoTextInput"
              name="todoTextInput"
              rows="2"
              value={textContent}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              className="h-11 w-full border border-black p-2"
            />
            <input
              type="reset"
              value="Clear"
              onClick={handleReset}
              data-testid="reset-btn"
              className="w-full border-2 border-black rounded text-white font-semibold bg-red-500"
            />
          </div>
          <input
            type="button"
            value="Create"
            onClick={handleSubmit}
            className="border-2 border-black rounded bg-green-500 grow ml-1 px-2 text-white font-semibold"
          />
        </div>
      </form>
    </>
  );
};

export default TextInput;
