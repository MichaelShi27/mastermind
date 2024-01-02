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
  // string - the number to guess
  const [ number, setNumber ] = useState('0000'); 

  // string - the user's guess
  const [ guess, setGuess ] = useState(''); 

  // string - the message displayed to the user
  const [ message, setMessage ] = useState(''); 

  // array of objects - contains the user's past guesses for the current number
  const [ history, setHistory ] = useState([]); 

  // integer - the length of the number to guess, i.e. how many digits it has
  const [ numberLength, setNumberLength ] = useState(DEFAULTS.NUMBER_LENGTH);

  // integer - how many guesses the user starts with to guess the number
  const [ totalGuesses, setTotalGuesses ] = useState(DEFAULTS.TOTAL_GUESSES);

  // boolean - if the game is over or not
  const [ gameOver, setGameOver ] = useState(false);

  // object - a linked list containing the user's best scores in ascending order
  const [ highScores, setHighScores ] = useState(new LinkedList());

  // integer - the number of remaining guesses for the current number
  const [ remainingGuesses, setRemainingGuesses ] = useState(DEFAULTS.TOTAL_GUESSES); 

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
    if (data.name === "Error")
      return displayError(data.message);
      
    // if 404 response, the app will create & use its own random num
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
    return updatedScores; // returns null if highScores isn't changed
  };

  const analyzeGuess = () => {
    if (guess === '') return; // need this for when the app first renders

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
