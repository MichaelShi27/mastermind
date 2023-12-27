import useApp from './useApp.js';
import Input from '../Input/Input.js';
import History from '../History/History.js';
import { Message, PlayAgainButton, AppContainer } from '../styles.js';

const App = () => {
  const appVariables = useApp();
  const { gameOver, message, remainingGuesses, startNewGame } = appVariables;

  return (
    <AppContainer>
      {!gameOver && <Input {...appVariables} />}
      <Message>{message}</Message>
      {gameOver && <PlayAgainButton onClick={startNewGame}>Play Again</PlayAgainButton>}
      <div>Remaining guesses: {remainingGuesses}</div>
      <History {...appVariables } />
    </AppContainer>
  );
};

export default App;
