import { useEffect } from "react";
import * as textInputActions from "../TextInput/textInputSlice";
import * as todoListActions from "../TodoList/todoListSlice";
import { useDispatch, useSelector } from "react-redux";

const TextInput = () => {
  const dispatch = useDispatch();
  const textContent = useSelector((state) => state.textInput);

  useEffect(() => {
    localStorage.setItem("textContent", textContent);
  }, [textContent]);

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
      <form>
        <div className="flex bg-white dark:bg-gray-800 rounded p-1 mt-1">
          <div className="w-full">
            <textarea
              id="todoTextInput"
              name="todoTextInput"
              rows="1"
              placeholder="Write a to-do here"
              value={textContent}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              className="h-11 sm:h-14 w-full p-2 rounded border dark:border-gray-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
            />
            <input
              type="reset"
              value="Clear"
              onClick={handleReset}
              data-testid="reset-btn"
              className="w-full rounded-xl text-white font-semibold bg-red-500"
            />
          </div>
          <input
            type="button"
            value="Create"
            onClick={handleSubmit}
            className="rounded-2xl bg-blue-500 grow ml-1 px-2 text-white font-semibold"
          />
        </div>
      </form>
    </>
  );
};

export default TextInput;
