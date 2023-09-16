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
        <div className="flex">
          <div>
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
              value="Reset"
              onClick={handleReset}
              data-testid="reset-btn"
              className="border-2 w-full"
            />
          </div>
          <input
            type="button"
            value="Create !"
            onClick={handleSubmit}
            className="border-2 grow"
          />
        </div>
      </form>
    </>
  );
};

export default TextInput;
