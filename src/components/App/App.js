import useApp from './useApp.js';
import Input from '../Input/Input.js';
import History from '../History/History.js';
import { 
  Message, PlayAgainButton, GuessContainer, OptionsContainer, OptionsButton, OptionsInput
} from '../styles.js';

const App = () => {
  const appVariables = useApp();
  const { number, gameOver, message, remainingGuesses, startNewGame } = appVariables;

  return (<>
    <GuessContainer>
      {!gameOver && <Input {...appVariables} />}
      <Message>{message}</Message>
      {gameOver && <PlayAgainButton onClick={startNewGame}>Play Again</PlayAgainButton>}
      <div>Remaining guesses: {remainingGuesses}</div>
      <History {...appVariables} />
    </GuessContainer>
    <OptionsContainer>
      Options:
      <OptionsButton>Show Hint</OptionsButton>
      <label>Enter number of digits to guess (4 - 8): </label>
      <OptionsInput placeholder={number ? number.length : ''} />
      <label>Enter number of turns (5 - 15): </label>
      <OptionsInput />
      <OptionsButton>Add Timer</OptionsButton>
    </OptionsContainer>
  </>);
};

export default App;
