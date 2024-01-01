import { useState, useEffect } from "react";
import AppHelpers from "./helpers/AppHelpers.js";
import { DEFAULTS, MESSAGES } from "../constants.js";
import Score from "./Score.js";
import { LinkedList } from "./LinkedList.js";
import Guess from './Guess.js';
import MessageHelpers from './helpers/MessageHelpers.js';

/*
  this is a custom React Hook to handle the logic for App.js,
  i.e. the main/overarching logic of the app
*/
const useApp = () => {
  const [ number, setNumber ] = useState('0000'); // the number to guess
  const [ guess, setGuess ] = useState(''); // user's guess
  const [ remainingGuesses, setRemainingGuesses ] = useState(DEFAULTS.TOTAL_GUESSES); 
  const [ message, setMessage ] = useState('');
  const [ history, setHistory ] = useState([]);
  const [ gameOver, setGameOver ] = useState(false);
  const [ numberLength, setNumberLength ] = useState(DEFAULTS.NUMBER_LENGTH);
  const [ totalGuesses, setTotalGuesses ] = useState(DEFAULTS.TOTAL_GUESSES);
  const [ highScores, setHighScores ] = useState(new LinkedList());

  // start new game when page first renders
  useEffect(() => startNewGame(numberLength, totalGuesses), []);

  // change numberLength whenever number changes
  useEffect(() => setNumberLength(number.length), [ number ]);

  useEffect(() => analyzeGuess(), [ remainingGuesses ]);

  /*
    this function runs after the app first renders, after the user presses the PlayAgainButton 
    (e.g. after win or loss), and after a user submits to NumberLengthInput or TotalGuessesInput.
    it fetches a new number for the user to guess, then resets various game state variables

    - numLength determines how long the new number to guess should be
    - guessesCount determines how many guesses the user has in the new game 
  */
  const startNewGame = (numLength, guessesCount) => {
    AppHelpers.fetchNumber(numLength)
      .then(data => handleNumberResponse(data, numLength))
      .catch(console.log);

    setTotalGuesses(guessesCount);
    setRemainingGuesses(guessesCount);
    setGuess('');
    setMessage('');
    setHistory([]);
    setGameOver(false);
  };

  const handleNumberResponse = (data, numLength) => {
    if (data.name === "Error") // should catch all errors except 404
      return displayError(data.message);
      
    // if 404 response, app will create & use its own random num
    const num = data === 404 ? AppHelpers.createRandomNumber(numLength) 
        : data.replace(/[\n]/g, ''); // otherwise, remove newline chars

    isNaN(Number(num)) ? displayError(MESSAGES.BAD_RESPONSE) : setNumber(num);
  };

  const endGame = isLoss => {
    setGameOver(true);
    if (isLoss === true)
      return setMessage(MESSAGES.LOSS);

    setMessage(handleHighScores() === null ? MESSAGES.CORRECT_GUESS 
        : MESSAGES.NEW_HIGH_SCORE);
  };

  const handleHighScores = () => {
    const scoreObj = new Score(highScores, totalGuesses - remainingGuesses, 
      numberLength);
    const insertLocation = scoreObj.getInsertLocation();
    const updatedScores = scoreObj.getUpdatedScores(insertLocation);

    if (updatedScores !== null)
      setHighScores(updatedScores);
    return updatedScores;
  };

  const analyzeGuess = () => {
    if (guess === '') return;

    const [ digitCount, locationCount ] = new Guess(guess, number).countMatches();
    const feedback = MessageHelpers.createFeedbackMessage(digitCount, locationCount);
    setHistory(oldHistory => [ { guess, feedback }, ...oldHistory ]);

    if (remainingGuesses === 0) // player loses
      endGame(true);
    else if (guess === number) // player wins
      endGame(false);
    else
      setMessage('');
  };

  const displayError = message => {
    setMessage(`Sorry, looks like there's a problem: ${message}`);
    setGameOver(true);
  };

  return {
    remainingGuesses,
    message,
    history,
    gameOver,
    numberLength,
    totalGuesses,
    highScores,
    setGuess,
    setMessage,
    setRemainingGuesses,
    startNewGame
  };
};

export default useApp;
