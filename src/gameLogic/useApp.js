import { useState, useEffect } from "react";
import AppHelpers from "./helpers/AppHelpers.js";
import { MESSAGES } from "../constants.js";
import HighScores from "./HighScores.js";
import { LinkedList } from "./LinkedList.js";
import GuessAnalysis from './GuessAnalysis.js';
import MessageHelpers from './helpers/MessageHelpers.js';

/*
  this is a custom React hook to handle the logic for App.js,
  i.e. the main/overarching logic of the app
*/
const useApp = () => {
  const [ number, setNumber ] = useState('0000');
  const [ guess, setGuess ] = useState('');
  const [ remainingGuesses, setRemainingGuesses ] = useState(10);
  const [ message, setMessage ] = useState('');
  const [ history, setHistory ] = useState([]);
  const [ gameOver, setGameOver ] = useState(false);
  const [ numberLength, setNumberLength ] = useState(4);
  const [ totalGuesses, setTotalGuesses ] = useState(10);
  const [ highScores, setHighScores ] = useState(new LinkedList());

  useEffect(() => startNewGame(numberLength, totalGuesses), []);

  useEffect(() => setNumberLength(number.length), [ number ]);

  useEffect(() => analyzeGuess(), [ remainingGuesses ]);

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
    setGuess('');
    setMessage('');
    setHistory([]);
    setGameOver(false);
  };

  const endGame = isLoss => {
    setGameOver(true);
    if (isLoss === true)
      setMessage(MESSAGES.LOSS);
    else {
      const highScoresObj = new HighScores(highScores, 
          totalGuesses - remainingGuesses, numberLength);
      const insertLocation = highScoresObj.getInsertLocation();
      const updatedScores = highScoresObj.getUpdatedScores(insertLocation);
      if (updatedScores !== null)
        setHighScores(updatedScores);
      setMessage(updatedScores === null ? MESSAGES.CORRECT_GUESS 
          : MESSAGES.NEW_HIGH_SCORE);
    }
  };

  const analyzeGuess = () => {
    if (guess === '') return;

    const [ digitCount, locationCount ] = new GuessAnalysis(guess, number).countMatches();
    const feedback = MessageHelpers.createFeedbackMessage(digitCount, locationCount);
    setHistory(oldHistory => [ { guess, feedback }, ...oldHistory ]);

    if (remainingGuesses === 0) // player loses
      endGame(true);
    else if (guess === number) // player wins
      endGame(false);
    else
      setMessage('');
  };

  return {
    number,
    remainingGuesses,
    message,
    history,
    gameOver,
    numberLength,
    totalGuesses,
    highScores,
    setGuess,
    setMessage,
    setGameOver,
    setRemainingGuesses,
    setHistory,
    startNewGame,
    endGame
  };
};

export default useApp;
