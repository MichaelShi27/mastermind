import styled from 'styled-components';

// App.js
export const Message = styled.div`
  margin: 0 0 30px;
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
  background-color: #DCDCDC;
`;

export const OptionsContainer = styled.div`
  display: inline-flex;
  margin: 0 20px;
  padding: 30px;
  // width: fit-content;
  background-color: #DCDCDC;
  flex-direction: column;
  vertical-align: top;
`;

export const OptionsInput = styled.input`
  width: 130px;
  margin-bottom: 10px;
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

// DigitsInput.js
export const DigitsForm = styled.form`
  display: flex;
  flex-direction: column;
`;
