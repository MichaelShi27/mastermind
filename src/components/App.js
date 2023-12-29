import useApp from '../gameLogic/useApp.js';
import GuessInput from './GuessInput.js';
import GuessHistory from './GuessHistory.js';
import NumberLengthInput from './NumberLengthInput.js';
import TotalGuessesInput from './TotalGuessesInput.js';
import PlayAgainButton from './PlayAgainButton.js';
import { Message, GuessContainer, OptionsContainer, OptionsButton } from './styles.js';

const App = () => {
  const appVariables = useApp();
  const { message, remainingGuesses, numberLength } = appVariables;

  return (<>
    <GuessContainer>
      <div>To make a guess, type a {numberLength}-digit number or press SHIFT</div>
      <div> and speak the number into your mic:</div>
      <Message>{message}</Message>
      <GuessInput {...appVariables} />
      <PlayAgainButton {...appVariables} />
      <div>Remaining guesses: {remainingGuesses}</div>
      <GuessHistory {...appVariables} />
    </GuessContainer>
    <OptionsContainer>
      Game Options:
      <OptionsButton>Show Hint</OptionsButton>
      <NumberLengthInput {...appVariables} />
      <TotalGuessesInput {...appVariables} />
      <OptionsButton>Add Timer</OptionsButton>
    </OptionsContainer>
  </>);
};

export default App;
