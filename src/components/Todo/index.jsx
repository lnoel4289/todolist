const Todo = ({
  string,
  isChecked,
  handleChange,
  handleDelete,
  testId,
  index,
}) => {
  const undoneArticleStyle = "bg-orange-400";
  const doneArticleStyle = "bg-green-400";
  const undoneParagStyle = "bg-orange-100";
  const doneParagStyle = "bg-green-100";

  return (
    <article
      data-testid={testId}
      className={
        isChecked
          ? `border-2 m-h-14 ${doneArticleStyle}`
          : `border-2 m-h-14 ${undoneArticleStyle}`
      }
    >
      <span className="border italic">{isChecked ? "Done !" : "Todo"}</span>
      <div className="flex justify-between">
        <p
          className={
            isChecked
              ? `grow border-2 break-words hyphens-auto ${undoneParagStyle}`
              : `grow border-2 break-words hyphens-auto ${doneParagStyle}`
          }
        >
          {isChecked ? `` : index + 1 + `.`} {string}
        </p>
        <div className="flex items-center space-x-2">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />{" "}
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
