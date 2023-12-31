import { HighScoresContainer, GuessHistoryEntry } from './styles.js';

const HighScores = ({ highScores }) => {
  const scoresArray = highScores.convertToArray();
  return (
    <HighScoresContainer>
      <div>High Scores:</div>
      {scoresArray.map((score, idx) => (
        <GuessHistoryEntry key={idx}>
          <span>{score.data.guessesUsed}</span> ---
          <span>{` `}</span>
        </GuessHistoryEntry>
      ))}
      {scoresArray.length === 0 && <div>None yet.</div>}
    </HighScoresContainer>
  );
};

export default HighScores;
