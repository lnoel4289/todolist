const Todo = ({
  string,
  isChecked,
  handleChange,
  handleDelete,
  testId,
  index,
}) => {
  const baseArticleStyle = "p-1 rounded shadow-lg";
  const undoneArticleStyle = "bg-blue-300";
  const doneArticleStyle = "bg-gray-300";
  const baseParagStyle =
    "grow px-1 break-words hyphens-auto font-indie text-lg xs:text-xl sm:text-2xl";
  const undoneParagStyle = "bg-blue-100";
  const doneParagStyle = "bg-gray-100";
  const baseSpanStyle = "italic px-3 rounded border";
  const undoneSpanStyle = "text-blue-100 bg-blue-500 border-blue-100";
  const doneSpanStyle = "text-gray-100 bg-gray-500 border-gray-100";

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
        {isChecked ? "Done !" : index + 1}
      </span>
      <div className="flex justify-between mt-1">
        <p
          className={
            isChecked
              ? `${baseParagStyle} ${doneParagStyle}`
              : `${baseParagStyle} ${undoneParagStyle}`
          }
        >
          {string}
        </p>
        <div className="flex items-center space-x-2 px-1 pl-2">
          <label
            htmlFor={isChecked ? `done${index}` : `todo${index}`}
            className= {isChecked ? "relative w-8 h-8 bg-white border rounded border-black" : "relative w-8 h-8 bg-white border rounded border-blue-500"}
          >
            <input
              type="checkbox"
              id={isChecked ? `done${index}` : `todo${index}`}
              checked={isChecked}
              onChange={handleChange}
              className="invisible"
            />
            <span
              className={
                isChecked
                  ? `absolute top-0 left-0 rounded-sm bg-gray-500 w-full h-full after:content-[''] after:absolute after:left-1.5 after:top-1.5 after:w-5 after:h-3 after:border-white after:border-b-4 after:border-l-4 after:-rotate-45`
                  : ``
              }
            ></span>
          </label>
          <i className="fa-solid fa-trash text-3xl" onClick={handleDelete} />
        </div>
      </div>
    </article>
  );
};

export default Todo;
