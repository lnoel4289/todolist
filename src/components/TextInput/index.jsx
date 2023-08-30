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
      TEXTINPUT COMPONENT :
      <form>
        <label htmlFor="todoTextInput">Enter a task to do here</label>
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
          required
        />
        <input
          type="reset"
          value="reset"
          onClick={handleReset}
          data-testid="reset-btn"
        />
        <input type="button" value="CREATE TODO" onClick={handleSubmit} />
      </form>
    </>
  );
};

export default TextInput;
