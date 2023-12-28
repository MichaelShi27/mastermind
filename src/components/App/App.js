import useApp from './useApp.js';
import GuessInput from '../GuessInput/GuessInput.js';
import GuessHistory from '../GuessHistory/GuessHistory.js';
import DigitsInput from '../DigitsInput/DigitsInput.js';
import { 
  Message, PlayAgainButton, GuessContainer, OptionsContainer, OptionsButton, OptionsInput
} from '../styles.js';

const App = () => {
  const appVariables = useApp();
  const { gameOver, message, remainingGuesses, numberLength, startNewGame } = appVariables;

  return (<>
    <GuessContainer>
      <Message>{message}</Message>
      {!gameOver && <GuessInput {...appVariables} />}
      {gameOver && <PlayAgainButton onClick={() => startNewGame(numberLength)}>Play Again</PlayAgainButton>}
      <div>Remaining guesses: {remainingGuesses}</div>
      <GuessHistory {...appVariables} />
    </GuessContainer>
    <OptionsContainer>
      Options:
      <OptionsButton>Show Hint</OptionsButton>
      <DigitsInput {...appVariables}/>
      <label>Enter number of turns (5 - 15): </label>
      <OptionsInput />
      <OptionsButton>Add Timer</OptionsButton>
    </OptionsContainer>
  </>);
};

export default App;
