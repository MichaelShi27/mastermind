import styled from 'styled-components';

const LIGHT_GRAY = '#DCDCDC';

// App.js
export const Message = styled.div`
  margin: 20px 0 20px;
  color: blue;
`;

export const NewGameButton = styled.button`
  margin: 0 0 20px;
`;

export const OptionsButton = styled.button`
  margin: 20px 0;
  width: 100px;
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

export const OptionsInput = styled.input`
  width: 130px;
  margin-bottom: 10px;
`;

export const HighScoresContainer = styled.div`
  padding: 20px;
  display: inline-block;
  background-color: ${LIGHT_GRAY};
`;

// GuessInput.js
export const GuessForm = styled.form`
  margin-bottom: 20px;
`;

// GuessHistory.js
export const GuessHistoryContainer = styled.div`
  margin-top: 20px;
`;

export const GuessHistoryEntry = styled.div`
  background-color: #EFEFEF;
  margin: 2px;
  padding: 8px;
  border-radius: 4px;
`;

// DigitsInput.js & TotalGuessesInput.js
export const OptionsForm = styled.form`
  display: flex;
  flex-direction: column;
`;
