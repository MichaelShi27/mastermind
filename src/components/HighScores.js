import { HighScoresContainer, GuessHistoryEntry } from './styles.js';

const HighScores = ({ highScores }) => (
  <HighScoresContainer>
    <div>High Scores:</div>
    {/* {highScores.map(({}, idx) => (
      <GuessHistoryEntry key={idx}>
        <span>{}</span> ---
        <span>{` ${}`}</span>
      </GuessHistoryEntry>
    ))} */}
  </HighScoresContainer>
);

export default HighScores;
