const Todo = ({
  string,
  isChecked,
  handleChange,
  handleDelete,
  testId,
  index,
}) => {
  return (
    <div data-testid={testId} className="flex justify-between border-2 h-14">
      <div className="border-2 grow">
        <span className="border-2">{isChecked ? "Done" : "Todo"}</span>
        <br />
        {!isChecked && `${index + 1}. `}
        {string}
      </div>
      <div className="flex items-center">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />{" "}
        <i className="fa-solid fa-trash" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Todo;
