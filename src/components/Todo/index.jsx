const Todo = ({ todo, index }) => {
  return (
    <div>
      {index + 1} {todo}  <input type="checkbox" checked={false} />
    </div>
  );
};

export default Todo;
