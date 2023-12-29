import axios from 'axios';
import { DIGITS } from '../../constants.js';

// helper functions used only in App.js
class AppHelpers {
  fetchNumber = numberLength => (
    axios('/api/number', { params: { numberLength } })
      .then(({ data }) => data)
      .catch(console.log)
  );

  createRandomNumber = numLength => {
    let str = '';
    for (let i = 0; i < numLength; i++)
      str += Math.floor(Math.random() * (DIGITS.MAX_VAL - DIGITS.MIN_VAL + 1) + DIGITS.MIN_VAL);
    return str;
  };
}

export default AppHelpers;
