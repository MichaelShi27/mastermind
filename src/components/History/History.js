const History = ({ history }) => (<>
  <div>Past guesses:</div>
  {history.map(({ guess, message }, idx) => (
    idx === 0 ? null : (
      <div key={idx}>
        <span>{guess}</span> ----
        <span>{message}</span>
      </div>
    )
  ))}
</>);

export default History;
