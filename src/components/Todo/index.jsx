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
    "grow border px-1 break-words hyphens-auto font-indie text-lg xs:text-xl sm:text-2xl";
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
      <div className="flex justify-between mt-1">
        <p
          className={
            isChecked
              ? `${baseParagStyle} ${doneParagStyle}`
              : `${baseParagStyle} ${undoneParagStyle}`
          }
        >
          {isChecked ? `` : index + 1 + `.`} {string}
        </p>
        <div className="flex items-center space-x-2 px-1 pl-2">
          <label
            htmlFor={isChecked ? `done${index}` : `todo${index}`}
            className="relative w-8 h-8 bg-white border rounded border-blue-500"
          >
            <input
              type="checkbox"
              id={isChecked ? `done${index}` : `todo${index}`}
              checked={isChecked}
              onChange={handleChange}
              className="invisible"
            /><span className={isChecked ? `absolute top-0 left-0 rounded-sm bg-green-500 w-full h-full after:content-[''] after:absolute after:left-1.5 after:top-1.5 after:w-5 after:h-3 after:border-white after:border-b-4 after:border-l-4 after:-rotate-45` : ``}></span>
          </label>
          <i className="fa-solid fa-trash text-3xl" onClick={handleDelete} />
        </div>
      </div>
    </article>
  );
};

export default Todo;
