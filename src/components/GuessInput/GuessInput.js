import getGuessInputFunctions from './logic.js';
import { GuessForm } from '../styles.js';

const GuessInput = appVariables => {
  const { gameOver } = appVariables;
  const { handleGuessSubmit } = getGuessInputFunctions(appVariables);

  return gameOver ? null : (
    <GuessForm onSubmit={handleGuessSubmit}>
      <input name="guess" />
      <button>Guess</button>
    </GuessForm>
  );
};

export default GuessInput;
