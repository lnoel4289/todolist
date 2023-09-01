const Done = ({ done, index, checked }) => {
  return (
    <div>
      {index + 1} {done}  <input type="checkbox" checked ={checked} />
    </div>
  );
};

export default Done;
