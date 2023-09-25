const Todo = ({
  string,
  isChecked,
  handleChange,
  handleDelete,
  testId,
  index,
}) => {
  return (
    <article data-testid={testId} className="border-2 m-h-14">
      <span className="border italic">{isChecked ? "Done !" : "Todo"}</span>
      <div className="flex justify-between">
        <div className="grow">
          <p className="border-2">
            <span>{!isChecked && `${index + 1}. `}</span>
            {string}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />{" "}
          <i
            className="fa-solid fa-trash Class
Properties"
            onClick={handleDelete}
          />
        </div>
      </div>
    </article>
  );
};

export default Todo;
