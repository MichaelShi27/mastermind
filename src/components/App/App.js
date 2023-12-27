import useApp from './useApp.js';
import GuessInput from '../GuessInput/GuessInput.js';
import History from '../History/History.js';
import DigitsInput from '../DigitsInput/DigitsInput.js';
import { 
  Message, PlayAgainButton, GuessContainer, OptionsContainer, OptionsButton, OptionsInput
} from '../styles.js';

const App = () => {
  const appVariables = useApp();
  const { gameOver, message, remainingGuesses, startNewGame } = appVariables;

  return (<>
    <GuessContainer>
      {!gameOver && <GuessInput {...appVariables} />}
      <Message>{message}</Message>
      {gameOver && <PlayAgainButton onClick={startNewGame}>Play Again</PlayAgainButton>}
      <div>Remaining guesses: {remainingGuesses}</div>
      <History {...appVariables} />
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
