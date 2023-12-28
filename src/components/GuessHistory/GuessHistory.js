import { GuessHistoryContainer, GuessHistoryEntry } from '../styles.js';

const GuessHistory = ({ history }) => (
  <GuessHistoryContainer>
    <div>Past guesses:</div>
    {history.map(({ guess, message }, idx) => (
      <GuessHistoryEntry key={idx}>
        <span>{guess}</span> ---
        <span>{` ${message}`}</span>
      </GuessHistoryEntry>
    ))}
  </GuessHistoryContainer>
);

export default GuessHistory;
