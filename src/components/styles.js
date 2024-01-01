import styled from 'styled-components';

const LIGHT_GRAY = '#DCDCDC';

// App.js
export const Message = styled.div`
  margin: 20px 0 20px;
  color: blue;
`;

export const GuessContainer = styled.div`
  display: inline-block;
  padding: 50px;
  width: fit-content;
  background-color: ${LIGHT_GRAY};
`;

export const OptionsContainer = styled.div`
  display: inline-flex;
  margin: 0 20px;
  padding: 30px;
  background-color: ${LIGHT_GRAY};
  flex-direction: column;
  vertical-align: top;
`;

// PlayAgainButton.js
export const NewGameButton = styled.button`
  margin: 0 0 20px;
`;

// HighScores.js
export const HighScoresContainer = styled.div`
  padding: 30px;
  display: inline-block;
  background-color: ${LIGHT_GRAY};
  vertical-align: top;
`;

// GuessInput.js
export const GuessForm = styled.form`
  margin-bottom: 20px;
`;

// GuessHistory.js
export const GuessHistoryContainer = styled.div`
  margin-top: 20px;
`;

// GuessHistory.js & HighScores.js
export const ListEntry = styled.div`
  background-color: #EFEFEF;
  margin: 2px;
  padding: 8px;
  border-radius: 4px;
`;

// NumberLengthInput.js & TotalGuessesInput.js
export const OptionsForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const OptionsInput = styled.input`
  width: 130px;
  margin-bottom: 10px;
`;
