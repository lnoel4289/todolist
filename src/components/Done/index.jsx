const Done = ({ done, index }) => {
  return (
    <div>
      {index + 1} {done}  <input type="checkbox" checked={true} />
    </div>
  );
};

export default Done;
