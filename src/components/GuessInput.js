import SubmitHandlers from '../gameLogic/SubmitHandlers.js';
import SpeechRecognition from '../gameLogic/SpeechRecognition.js';
import { GuessForm } from './styles.js';

const GuessInput = appObj => {
  const { handleTextGuessSubmit } = new SubmitHandlers();
  const onGuessSubmit = e => handleTextGuessSubmit(e, appObj);

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
