import SubmitHandlers from '../gameLogic/SubmitHandlers.js';
import SpeechRecognition from '../gameLogic/SpeechRecognition.js';
import { GuessForm } from './styles.js';

const GuessInput = appVariables => {
  const { handleTextGuessSubmit } = new SubmitHandlers();
  const onGuessSubmit = e => handleTextGuessSubmit(e, appVariables);

  const handleKeyDown = e => e.key === 'Shift'
      && new SpeechRecognition(e, appVariables).listenForSpeech();

  return appVariables.gameOver === true ? null : (
    <GuessForm onSubmit={onGuessSubmit}>
      <input name="guess" onKeyDown={handleKeyDown} />
      <button>Guess</button>
    </GuessForm>
  );
};

export default GuessInput;
