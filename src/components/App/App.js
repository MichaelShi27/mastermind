import useApp from './useApp.js';
import Input from '../Input/Input.js';
import History from '../History/History.js';
import { Message, PlayAgainButton, AppContainer } from '../styles.js';

const App = () => {
  const {
    number,
    guess,
    remainingGuesses,
    message,
    history,
    gameOver,
    setGuess,
    setMessage,
    setGameOver,
    setRemainingGuesses,
    startNewGame
  } = useApp();

  return (
    <AppContainer>
      {!gameOver && <Input {...{ guess, number, remainingGuesses, setGuess, setMessage, setGameOver, setRemainingGuesses }} />}
      <Message>{message}</Message>
      {gameOver && <PlayAgainButton onClick={startNewGame}>Play Again</PlayAgainButton>}
      <div>Remaining guesses: {remainingGuesses}</div>
      <History {...{ history }} />
    </AppContainer>
  );
};

export default App;
