function Button({ buttonLabel, clickHandler, disabled }) {
  return (
    <button
      onClick={clickHandler}
      disabled={disabled}
      className={`rounded-md px-2 text-sm ${
        disabled ?  "bg-gray-200": "bg-green-400"
      }`}
    >
      {buttonLabel}
    </button>
  );
}

export default Button;
