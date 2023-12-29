import SubmitHandlers from '../gameLogic/SubmitHandlers.js';
import { GuessForm } from './styles.js';

const GuessInput = appVariables => {
  const { gameOver } = appVariables;
  const { handleGuessSubmit } = new SubmitHandlers();
  const onGuessSubmit = e => handleGuessSubmit(e, appVariables);

  return gameOver ? null : (
    <GuessForm onSubmit={onGuessSubmit}>
      <input name="guess" />
      <button>Guess</button>
    </GuessForm>
  );
};

export default GuessInput;
