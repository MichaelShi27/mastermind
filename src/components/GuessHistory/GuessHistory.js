import { GuessHistoryContainer, GuessHistoryEntry } from '../styles.js';

const GuessHistory = ({ history }) => (
  <GuessHistoryContainer>
    <div>Past guesses:</div>
    {history.map(({ guess, feedback }, idx) => (
      <GuessHistoryEntry key={idx}>
        <span>{guess}</span> ---
        <span>{` ${feedback}`}</span>
      </GuessHistoryEntry>
    ))}
  </GuessHistoryContainer>
);

export default GuessHistory;
