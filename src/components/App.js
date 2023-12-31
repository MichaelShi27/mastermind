import useApp from '../gameLogic/useApp.js';
import GuessInput from './GuessInput.js';
import GuessHistory from './GuessHistory.js';
import NumberLengthInput from './NumberLengthInput.js';
import TotalGuessesInput from './TotalGuessesInput.js';
import PlayAgainButton from './PlayAgainButton.js';
import HighScores from './HighScores.js';
import { Message, GuessContainer, OptionsContainer, OptionsButton } from './styles.js';

const App = () => {
  const appObj = useApp();
  const { message, remainingGuesses, numberLength } = appObj;

  return (<>
    <GuessContainer>
      <div>To make a guess, type a {numberLength}-digit number or press SHIFT</div>
      <div> and speak the number into your mic:</div>
      <Message>{message}</Message>
      <GuessInput {...appObj} />
      <PlayAgainButton {...appObj} />
      <div>Remaining guesses: {remainingGuesses}</div>
      <GuessHistory {...appObj} />
    </GuessContainer>
    <OptionsContainer>
      Game Options:
      <OptionsButton>Show Hint</OptionsButton>
      <NumberLengthInput {...appObj} />
      <TotalGuessesInput {...appObj} />
      <OptionsButton>Add Timer</OptionsButton>
    </OptionsContainer>
    <HighScores {...appObj} />
  </>);
};

export default App;
