import { useState, useEffect } from "react";
import { fetchNumber } from "./helpers.js";
import { MESSAGES } from "../../constants.js";

const useApp = () => {
  const [ number, setNumber ] = useState('0000');
  const [ guess, setGuess ] = useState('');
  const [ remainingGuesses, setRemainingGuesses ] = useState(10);
  const [ message, setMessage ] = useState('');
  const [ history, setHistory ] = useState([]);
  const [ gameOver, setGameOver ] = useState(false);
  const [ numberLength, setNumberLength ] = useState(4);

  useEffect(() => startNewGame(numberLength), []);

  useEffect(() => setNumberLength(number.length), [ number ]);

  useEffect(() => {
    if (remainingGuesses === 10) return; // otherwise history gains an entry upon initial render

    if (remainingGuesses === 0) { // player loses
      setMessage(MESSAGES.LOSS);
      setGameOver(true);
    }
    setHistory(oldHistory => [ { guess, message }, ...oldHistory ]);
  }, [ remainingGuesses ]);

  const startNewGame = numLength => {
    fetchNumber(numLength)
      .then(data => setNumber(data.replace(/[\n]/g, ''))) // remove newline chars
      .catch(console.log);

    setGuess('');
    setRemainingGuesses(10);
    setMessage('');
    setHistory([]);
    setGameOver(false);
  };

  return {
    guess,
    number,
    remainingGuesses,
    message,
    history,
    gameOver,
    numberLength,
    setGuess,
    setMessage,
    setGameOver,
    setRemainingGuesses,
    startNewGame
  };
};

export default useApp;
