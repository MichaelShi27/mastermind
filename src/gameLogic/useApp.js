import { useState, useEffect } from "react";
import AppHelpers from "./helpers/AppHelpers.js";
import { MESSAGES } from "../constants.js";

/*
  this is a custom React hook to handle the logic for App.js,
  i.e. the main/overarching logic of the app
*/
const useApp = () => {
  const [ number, setNumber ] = useState('0000');
  const [ remainingGuesses, setRemainingGuesses ] = useState(10);
  const [ message, setMessage ] = useState('');
  const [ history, setHistory ] = useState([]);
  const [ gameOver, setGameOver ] = useState(false);
  const [ numberLength, setNumberLength ] = useState(4);
  const [ totalGuesses, setTotalGuesses ] = useState(10);

  useEffect(() => startNewGame(numberLength, totalGuesses), []);

  useEffect(() => setNumberLength(number.length), [ number ]);

  useEffect(() => {
    if (remainingGuesses === 0) { // player loses
      setMessage(MESSAGES.LOSS);
      setGameOver(true);
    }
  }, [ remainingGuesses ]);

  const startNewGame = (numLength, guessesCount) => {
    AppHelpers.fetchNumber(numLength)
      .then(data => {
        if (data.name === "Error") { // all errors except 404
          setMessage(`Sorry, looks like there's a problem: ${data.message}`);
          setGameOver(true);
        } else {
          // if 404 response, app will create & use its own random num
          const num = data === 404 ? AppHelpers.createRandomNumber(numLength) 
              : data.replace(/[\n]/g, ''); // otherwise, remove newline chars
          setNumber(num);
        }
      })
      .catch(console.log);

    setTotalGuesses(guessesCount);
    setRemainingGuesses(guessesCount);
    setMessage('');
    setHistory([]);
    setGameOver(false);
  };

  return {
    number,
    remainingGuesses,
    message,
    history,
    gameOver,
    numberLength,
    totalGuesses,
    setMessage,
    setGameOver,
    setRemainingGuesses,
    setHistory,
    startNewGame
  };
};

export default useApp;
