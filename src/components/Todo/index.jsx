const Todo = ({ string, isChecked, handleChange, handleDelete, testId }) => {
  return (
    <div data-testid={testId} className="flex">
      <div>{string}</div>
      <div className="flex items-center">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />{" "}
        <i className="fa-solid fa-trash" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Todo;
