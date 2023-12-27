import getGuessInputFunctions from "./logic.js";

const GuessInput = appVariables => {
  const { handleGuessSubmit, handleGuessChange } = getGuessInputFunctions(appVariables);

  return (
    <form onSubmit={handleGuessSubmit}>
      <input name="query" onChange={handleGuessChange} />
      <button>Guess</button>
    </form>
  );
};

export default GuessInput;
