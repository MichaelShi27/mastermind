import SubmitHandlers from '../gameLogic/SubmitHandlers.js';
import SpeechRecognition from '../gameLogic/SpeechRecognition.js';
import { GuessForm } from './styles.js';

// the input field and button for submitting a guess
const GuessInput = appObj => {
  const onGuessSubmit = e => SubmitHandlers.handleTextGuessSubmit(e, appObj);

  const handleKeyDown = e => e.key === 'Shift'
      && new SpeechRecognition(e, appObj).listenForSpeech();

  return appObj.gameOver === true ? null : (
    <GuessForm onSubmit={onGuessSubmit}>
      <input name="guess" onKeyDown={handleKeyDown} />
      <button>Guess</button>
    </GuessForm>
  );
};

export default GuessInput;
