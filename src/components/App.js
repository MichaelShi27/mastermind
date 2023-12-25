import React, { useState, useEffect } from "react";

import { getMatchCounts } from "../gameLogic.js";
import { fetchNumber, validateGuess } from "../helpers.js";

const App = () => {
  const [ number, setNumber ] = useState(null);
  const [ guess, setGuess ] = useState(null);
  const [ remainingGuesses, setRemainingGuesses ] = useState(10);
  const [ message, setMessage ] = useState('');

  useEffect(() => {
    fetchNumber()
      .then(data => setNumber(data.replace(/[\n]/g, ''))) // remove newline chars
      .catch(console.log);
  }, []);

  const makeGuess = e => {
    e.preventDefault();

    if (validateGuess(guess) === false) {
      setMessage('Please enter 4 numbers.');
      return;
    }

    if (guess === number)
      setMessage('Correct!');
    else {
      setRemainingGuesses(remainingGuesses - 1);

      const [ digitCount, locationCount ] = getMatchCounts(guess, number);

      const digitPlural = digitCount > 1 ? 's' : '';
      const locationPlural = locationCount !== 1 ? 's' : '';
      setMessage(
        digitCount === 0 ? 'All incorrect!'
          : `${digitCount} correct number${digitPlural} and ${locationCount} correct location${locationPlural}`
      );
    }
  };

  return (
    <>
      <form onSubmit={makeGuess}>
        <input name="query" onChange={e => setGuess(e.target.value)}/>
        <button>Guess</button>
      </form>
      <div>{number}</div>
      <div>{message}</div>
      <div>Remaining guesses: {remainingGuesses}</div>
    </>
  );
};

export default App;

