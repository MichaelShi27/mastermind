import { HighScoresContainer, ListEntry } from './styles.js';

const HighScores = ({ highScores }) => {
  const scoresArray = highScores.convertToArray();
  return (
    <HighScoresContainer>
      <div>High Scores:</div>
      <br />
      {scoresArray.map(({ data: { numLength, guessesUsed} }, idx) => (
        <ListEntry key={idx}>
          <span>{`#${idx + 1}: `}</span>
          <span>
            {` ${numLength} digits, ${guessesUsed} guess${
                guessesUsed === 1 ? '' : 'es'}`}
          </span>
        </ListEntry>
      ))}
      {scoresArray.length === 0 && <ListEntry>None yet.</ListEntry>}
    </HighScoresContainer>
  );
};

export default HighScores;
