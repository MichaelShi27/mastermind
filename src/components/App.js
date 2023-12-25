import React from "react";
import useApp from './useApp.js';

const App = () => {
  const {
    number,
    remainingGuesses,
    message,
    history,
    gameOver,
    handleGuessSubmit,
    handleGuessChange,
    startNewGame
  } = useApp();

  return (<>
    {!gameOver && (
      <form onSubmit={handleGuessSubmit}>
        <input name="query" onChange={handleGuessChange}/>
        <button>Guess</button>
      </form>
    )}
    <div>{number}</div>
    <div>{message}</div>
    {gameOver && <button onClick={startNewGame}>Play Again</button>}
    <div>Remaining guesses: {remainingGuesses}</div>
    <br></br>
    <div>Past guesses:</div>
    {history.map(({ guess, message }, idx) => (
      idx === 0 ? null : (
        <div key={idx}>
          <span>{guess}</span> ----
          <span>{message}</span>
        </div>
      )
    ))}
  </>);
};

export default App;
