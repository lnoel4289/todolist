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
    handleReset();
  };

  return (
    <>
      <form className="border-2">
        <label htmlFor="todoTextInput">Enter a task to do here</label>
        <div>
          <input
            type="text"
            id="todoTextInput"
            name="todoTextInput"
            value={textContent}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit();
              }
            }}
            size=""
            className="border-2"
          />
          <input
            type="reset"
            value="reset"
            onClick={handleReset}
            data-testid="reset-btn"
            className="border-2"
          />
        </div>
        <input
          type="button"
          value="Create TODO"
          onClick={handleSubmit}
          className="border-2"
        />
      </form>
    </>
  );
};

export default TextInput;
