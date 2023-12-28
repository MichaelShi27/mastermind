import useApp from './useApp.js';
import GuessInput from '../GuessInput/GuessInput.js';
import GuessHistory from '../GuessHistory/GuessHistory.js';
import NumberLengthInput from '../NumberLengthInput/NumberLengthInput.js';
import TotalGuessesInput from '../TotalGuessesInput/TotalGuessesInput.js';
import PlayAgainButton from '../PlayAgainButton/PlayAgainButton.js';
import { 
  Message, GuessContainer, OptionsContainer, OptionsButton, OptionsInput
} from '../styles.js';

const App = () => {
  const appVariables = useApp();
  const { message, remainingGuesses } = appVariables;

  return (<>
    <GuessContainer>
      <Message>{message}</Message>
      <GuessInput {...appVariables} />
      <PlayAgainButton {...appVariables} />
      <div>Remaining guesses: {remainingGuesses}</div>
      <GuessHistory {...appVariables} />
    </GuessContainer>
    <OptionsContainer>
      Options:
      <OptionsButton>Show Hint</OptionsButton>
      <NumberLengthInput {...appVariables} />
      <TotalGuessesInput {...appVariables} />
      <OptionsButton>Add Timer</OptionsButton>
    </OptionsContainer>
  </>);
};

export default App;
