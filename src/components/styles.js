import styled from 'styled-components';

// App.js
export const Message = styled.div`
  padding: 10px 0 20px;
  color: blue;
`;

export const PlayAgainButton = styled.button`
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

// History.js
export const HistoryContainer = styled.div`
  margin-top: 20px;
`;

export const HistoryEntry = styled.div`
  background-color: #EFEFEF;
  margin: 2px;
  padding: 8px;
  border-radius: 4px;
`;