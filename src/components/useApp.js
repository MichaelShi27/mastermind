import { useState, useEffect } from "react";

import { getMatchCounts } from "../gameLogic.js";
import { 
  createFeedbackMessage, fetchNumber, validateGuess, INVALID_GUESS_MESSAGE, 
  CORRECT_GUESS_MESSAGE, createFeedbackMessage 
} from "../helpers.js";

const useApp = () => {
  const [ number, setNumber ] = useState(null);
  const [ guess, setGuess ] = useState(null);
  const [ remainingGuesses, setRemainingGuesses ] = useState(10);
  const [ message, setMessage ] = useState('');

  useEffect(() => {
    fetchNumber()
      .then(data => setNumber(data.replace(/[\n]/g, ''))) // remove newline chars
      .catch(console.log);
  }, []);

  const handleGuessSubmit = e => {
    e.preventDefault();

    if (validateGuess(guess) === false) {
      setMessage(INVALID_GUESS_MESSAGE);
      return;
    }

    if (guess === number)
      setMessage(CORRECT_GUESS_MESSAGE);
    else {
      setRemainingGuesses(remainingGuesses - 1);
      const [ digitCount, locationCount ] = getMatchCounts(guess, number);
      setMessage(createFeedbackMessage(digitCount, locationCount));
    }
  };
  
  const handleGuessChange = e => setGuess(e.target.value);

  return {
    number,
    guess,
    remainingGuesses,
    message,
    handleGuessSubmit,
    handleGuessChange
  };
};

export default useApp;
