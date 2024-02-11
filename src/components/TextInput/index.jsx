import { useEffect } from "react";
import * as textInputActions from "../TextInput/textInputSlice";
import * as todoListActions from "../TodoList/todoListSlice";
import { useDispatch, useSelector } from "react-redux";

const TextInput = ({ text }) => {
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
        <div className="flex bg-silver rounded-2xl p-1 mt-1">
          <div className="w-full">
            <textarea
              id="todoTextInput"
              name="todoTextInput"
              rows="1"
              placeholder={text.homePage.textInput.placeholder}
              value={textContent}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              className="h-11 sm:h-14 w-full p-2 rounded rounded-tl-xl  dark:border-gray-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-300"
            />
            <input
              type="reset"
              value={text.homePage.textInput.clearButton}
              onClick={handleReset}
              data-testid="reset-btn"
              className="w-full rounded rounded-bl-xl text-white font-semibold bg-red-500 shadow-red-600 shadow-inner"
            />
          </div>
          <input
            type="button"
            value={text.homePage.textInput.createButton}
            onClick={handleSubmit}
            className="w-20 xs:w-24 rounded rounded-r-xl bg-blue-500 shadow-blue-600 shadow-inner ml-1 text-white font-semibold"
          />
        </div>
      </form>
    </>
  );
};

export default TextInput;
