import React from "react";
import * as todoListActions from "../TodoList/todoListSlice";
import { useDispatch } from "react-redux";

const TextInput = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let textContent = e.target.value;
    return textContent;
  };
  const handleSubmit = () => {
    const textContent = handleChange();
    dispatch(todoListActions.add(textContent));
  };

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
        <input type="reset" value="reset" />
        <input type="submit" value="CREATE TODO" onSubmit={handleSubmit} />
      </form>
    </>
  );
};

export default TextInput;
