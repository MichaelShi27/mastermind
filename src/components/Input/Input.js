import inputLogic from "./logic.js";

const Input = (inputProps) => {
  const { handleGuessSubmit, handleGuessChange } = inputLogic(inputProps);

  return (
    <form onSubmit={handleGuessSubmit}>
      <input name="query" onChange={handleGuessChange} />
      <button>Guess</button>
    </form>
  );
};

export default Input;
