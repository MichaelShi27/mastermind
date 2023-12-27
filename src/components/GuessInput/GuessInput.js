import getGuessInputFunctions from "./logic.js";

const GuessInput = appVariables => {
  const { handleGuessSubmit } = getGuessInputFunctions(appVariables);

  return (
    <form onSubmit={handleGuessSubmit}>
      <input name="guess" />
      <button>Guess</button>
    </form>
  );
};

export default GuessInput;
