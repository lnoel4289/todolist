import React from "react";

const TextInput = () => {
  return (
    <>
      TextInput Component :
      <form>
        <label htmlFor="todoTextInput">Enter a task to do here</label>
        <input type="text" id="todoTextInput" name="todoTextInput" required />
        <button>CREATE TODO</button>
      </form>
    </>
  );
};

export default TextInput;
