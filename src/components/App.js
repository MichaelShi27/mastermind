import React from "react";
import useApp from './useApp.js';

const App = () => {
  const {
    number,
    remainingGuesses,
    message,
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
  </>);
};

export default App;
