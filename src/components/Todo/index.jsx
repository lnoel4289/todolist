const Todo = ({ todo, index, checked }) => {
  return (
    <div>
      {index + 1} {todo} <input type="checkbox" checked={checked} />
    </div>
  );
};

export default Todo;
