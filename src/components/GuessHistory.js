import { GuessHistoryContainer, ListEntry } from './styles.js';

const GuessHistory = ({ history }) => (
  <GuessHistoryContainer>
    <div>Past guesses:</div>
    {history.map(({ guess, feedback }, idx) => (
      <ListEntry key={idx}>
        <span>{guess}</span> ---
        <span>{` ${feedback}`}</span>
      </ListEntry>
    ))}
  </GuessHistoryContainer>
);

export default GuessHistory;
