import React from "react";
import useApp from './useApp.js';

const App = () => {
  const {
    number,
    remainingGuesses,
    message,
    history,
    handleGuessSubmit,
    handleGuessChange
  } = useApp();

  return (<>
    <form onSubmit={handleGuessSubmit}>
      <input name="query" onChange={handleGuessChange}/>
      <button>Guess</button>
    </form>
    <div>{number}</div>
    <div>{message}</div>
    <div>Remaining guesses: {remainingGuesses}</div>
    <br></br>
    <div>Past guesses:</div>
    {history.map(({ guess, message }, idx) => (
      <div key={idx}>
        <span>{guess}</span>----
        <span>{message}</span>
      </div>
    ))}
  </>);
};

export default App;
