const Todo = ({
  string,
  isChecked,
  handleChange,
  handleDelete,
  testId,
  index,
}) => {
  const baseArticleStyle = "p-1 rounded border shadow-lg";
  const undoneArticleStyle = "bg-blue-300 border-blue-500";
  const doneArticleStyle = "bg-green-300 border-green-500";
  const baseParagStyle =
    "grow border p-1 break-words hyphens-auto mt-1 font-indie text-xl";
  const undoneParagStyle = "bg-blue-100 border-blue-500";
  const doneParagStyle = "bg-green-100 border-green-500";
  const baseSpanStyle = "italic px-3 rounded border";
  const undoneSpanStyle = "text-blue-100 bg-blue-500 border-blue-100";
  const doneSpanStyle = "text-green-100 bg-green-500 border-green-100";

  return (
    <article
      data-testid={testId}
      className={
        isChecked
          ? `${baseArticleStyle} ${doneArticleStyle}`
          : `${baseArticleStyle} ${undoneArticleStyle}`
      }
    >
      <span
        className={
          isChecked
            ? `${baseSpanStyle} ${doneSpanStyle} `
            : `${baseSpanStyle} ${undoneSpanStyle}`
        }
      >
        {isChecked ? "Done !" : "Todo"}
      </span>
      <div className="flex justify-between min-h-38">
        <p
          className={
            isChecked
              ? `${baseParagStyle} ${doneParagStyle}`
              : `${baseParagStyle} ${undoneParagStyle}`
          }
        >
          {isChecked ? `` : index + 1 + `.`} {string}
        </p>
        <div className="flex items-center space-x-2 p-1">
          <input
            type="checkbox"
            id="todoCheckbox"
            checked={isChecked}
            onChange={handleChange}
          />{" "}
          <i
            className="fa-solid fa-trash Class Properties"
            onClick={handleDelete}
          />
        </div>
      </div>
    </article>
  );
};

export default Todo;
