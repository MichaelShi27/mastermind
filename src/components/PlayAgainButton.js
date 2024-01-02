import { NewGameButton } from "./styles.js";

// a button that appears when the game ends and starts a new game upon click
const PlayAgainButton = ({ numberLength, gameOver, totalGuesses, startNewGame }) => (
  gameOver === true ? (
    <NewGameButton onClick={() => startNewGame(numberLength, totalGuesses)}>
      Play Again
    </NewGameButton>
  ) : null
);

export default PlayAgainButton;
