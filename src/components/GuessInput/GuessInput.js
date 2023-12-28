import getGuessInputFunctions from './logic.js';
import { GuessForm } from '../styles.js';

const GuessInput = appVariables => {
  const { handleGuessSubmit } = getGuessInputFunctions(appVariables);

  return (
    <GuessForm onSubmit={handleGuessSubmit}>
      <input name="guess" />
      <button>Guess</button>
    </GuessForm>
  );
};

export default GuessInput;
