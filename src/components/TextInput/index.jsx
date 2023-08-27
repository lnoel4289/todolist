import React from "react";
import * as textInputActions from "../TextInput/textInputSlice";
import { useDispatch } from "react-redux";

const TextInput = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(textInputActions.change(e.target.value));
  };
  const handleReset = () => dispatch(textInputActions.change(""));
  const handleSubmit = () => {};

  return (
    <>
      TextInput Component :
      <form>
        <label htmlFor="todoTextInput">Enter a task to do here</label>
        <input
          type="text"
          id="todoTextInput"
          name="todoTextInput"
          onChange={handleChange}
          required
        />
        <input type="reset" value="reset" onClick={handleReset} data-testid="reset-btn" />
        <input type="submit" value="CREATE TODO" onSubmit={handleSubmit} />
      </form>
    </>
  );
};

export default TextInput;
