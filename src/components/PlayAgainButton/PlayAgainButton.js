import { NewGameButton } from "../styles.js";

const PlayAgainButton = ({ numberLength, gameOver, startNewGame }) => (
  gameOver ? (
    <NewGameButton onClick={() => startNewGame(numberLength)}>
      Play Again
    </NewGameButton>
  ) : null
);

export default PlayAgainButton;
