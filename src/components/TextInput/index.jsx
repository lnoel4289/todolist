import React from "react";

const TextInput = () => {

  const handleSubmit = () => {
    todoList.unshift(todo)};

  return (
    <>
      TextInput Component :
      <form>
        <label htmlFor="todoTextInput">Enter a task to do here</label>
        <input type="text" id="todoTextInput" name="todoTextInput" required />
        <input type="reset" value="reset" />
        <input type="submit" value="CREATE TODO" onSubmit={handleSubmit} />
      </form>
    </>
  );
};

export default TextInput;
