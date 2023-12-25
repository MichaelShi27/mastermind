import { useState, useEffect } from "react";

import { getMatchCounts } from "../gameLogic.js";
import { 
  fetchNumber, validateGuess, INVALID_GUESS_MESSAGE, CORRECT_GUESS_MESSAGE, LOSS_MESSAGE,
  createFeedbackMessage 
} from "../helpers.js";

const useApp = () => {
  const [ number, setNumber ] = useState(null);
  const [ guess, setGuess ] = useState(null);
  const [ remainingGuesses, setRemainingGuesses ] = useState(10);
  const [ message, setMessage ] = useState('');
  const [ history, setHistory ] = useState([]);
  const [ gameOver, setGameOver ] = useState(false);

  useEffect(() => {
    fetchNumber()
      .then(data => setNumber(data.replace(/[\n]/g, ''))) // remove newline chars
      .catch(console.log);
  }, []);

  useEffect(() => {
    if (remainingGuesses === 10) return; // otherwise history gains an entry upon initial render

    if (remainingGuesses === 0) { // player loses
      setMessage(LOSS_MESSAGE);
      setGameOver(true);
    }
    setHistory(oldHistory => [ { guess, message }, ...oldHistory ]);
  }, [ remainingGuesses ]);

  const handleGuessSubmit = e => {
    e.preventDefault();

    if (validateGuess(guess) === false) {
      setMessage(INVALID_GUESS_MESSAGE);
      return;
    }

    if (guess === number) { // player wins
      setMessage(CORRECT_GUESS_MESSAGE);
      setGameOver(true);
    } else {
      setRemainingGuesses(remainingGuesses - 1);
      const [ digitCount, locationCount ] = getMatchCounts(guess, number);
      setMessage(createFeedbackMessage(digitCount, locationCount));
    }
  };
  
  const handleGuessChange = e => setGuess(e.target.value);

  const startNewGame = () => window.location.reload();

  return {
    number,
    remainingGuesses,
    message,
    history,
    gameOver,
    handleGuessSubmit,
    handleGuessChange,
    startNewGame
  };
};

export default useApp;
