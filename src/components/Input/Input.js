import inputLogic from "./logic.js";

const Input = appVariables => {
  const { handleGuessSubmit, handleGuessChange } = inputLogic(appVariables);

  return (
    <form onSubmit={handleGuessSubmit}>
      <input name="query" onChange={handleGuessChange} />
      <button>Guess</button>
    </form>
  );
};

export default Input;
