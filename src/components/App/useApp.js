import { useState, useEffect } from "react";
import { fetchNumber } from "./helpers.js";
import { MESSAGES } from "../../constants.js";

const useApp = () => {
  const [ number, setNumber ] = useState(null);
  const [ guess, setGuess ] = useState('');
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
      setMessage(MESSAGES.LOSS);
      setGameOver(true);
    }
    setHistory(oldHistory => [ { guess, message }, ...oldHistory ]);
  }, [ remainingGuesses ]);

  const startNewGame = () => window.location.reload();

  return {
    guess,
    number,
    remainingGuesses,
    message,
    history,
    gameOver,
    setGuess,
    setMessage,
    setGameOver,
    setRemainingGuesses,
    startNewGame
  };
};

export default useApp;
