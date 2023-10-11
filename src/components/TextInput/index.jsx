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
        <label htmlFor="todoTextInput">
          Enter a task to do here <i class="fa-solid fa-arrow-down"></i>
        </label>
        <div className="flex border-2 p-1 shadow-sm">
          <div className="w-full border">
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
              className="w-full"
            />
            <input
              type="reset"
              value="Clear"
              onClick={handleReset}
              data-testid="reset-btn"
              className="w-full border-t rounded "
            />
          </div>
          <input
            type="button"
            value="Create !"
            onClick={handleSubmit}
            className="border-2 grow ml-1 px-2"
          />
        </div>
      </form>
    </>
  );
};

export default TextInput;
