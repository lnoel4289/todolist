const Done = ({ done, checked }) => {
  return (
    <div>
      {done} <input type="checkbox" checked={checked} />
    </div>
  );
};

export default Done;
