import useApp from './useApp.js';
import Input from '../Input/Input.js';
import History from '../History/History.js';

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

  return (<>
    {!gameOver && <Input {...{ guess, number, remainingGuesses, setGuess, setMessage, setGameOver, setRemainingGuesses }} />}
    
    <div>{number}</div>
    <div>{message}</div>

    {gameOver && <button onClick={startNewGame}>Play Again</button>}
    <div>Remaining guesses: {remainingGuesses}</div>
    <br></br>
    <History {...{ history }} />
  </>);
};

export default App;
