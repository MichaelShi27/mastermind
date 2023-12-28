import { NewGameButton } from "../styles.js";

const PlayAgainButton = ({ numberLength, gameOver, totalGuesses, startNewGame }) => (
  gameOver ? (
    <NewGameButton onClick={() => startNewGame(numberLength, totalGuesses)}>
      Play Again
    </NewGameButton>
  ) : null
);

export default PlayAgainButton;
