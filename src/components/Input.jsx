
function Input({ type, changeHandler ,classes}) {

  return (
    <input
      type={type}
      onChange={changeHandler}
      className={`border-slate-600 py-2 border-2 px-2 ${classes}`}
    />
  );
}

export default Input;
