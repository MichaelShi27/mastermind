import SubmitHandlers from '../gameLogic/SubmitHandlers.js';
import SpeechRecognition from '../gameLogic/SpeechRecognition.js';
import { GuessForm } from './styles.js';

const GuessInput = appVariables => {
  const { handleTextGuessSubmit } = new SubmitHandlers();
  const onGuessSubmit = e => handleTextGuessSubmit(e, appVariables);

  const { listenForSpeech } = new SpeechRecognition();
  const handleKeyDown = e => e.key === 'Shift' && listenForSpeech(e, appVariables);

  return appVariables.gameOver ? null : (
    <GuessForm onSubmit={onGuessSubmit}>
      <input name="guess" onKeyDown={handleKeyDown} />
      <button>Guess</button>
    </GuessForm>
  );
};

export default GuessInput;
