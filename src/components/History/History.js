import { HistoryContainer, HistoryEntry } from '../styles.js';

const History = ({ history }) => (
  <HistoryContainer>
    <div>Past guesses:</div>
    {history.map(({ guess, message }, idx) => (
      idx === 0 ? null : (
        <HistoryEntry key={idx}>
          <span>{guess}</span> ---
          <span>{` ${message}`}</span>
        </HistoryEntry>
      )
    ))}
  </HistoryContainer>
);

export default History;
