import axios from 'axios';
import { DIGITS } from '../../constants.js';

// helper functions used only in useApp.js
class AppHelpers {
  static fetchNumber = numberLength => (
    axios('/api/number', { params: { numberLength } })
      .then(({ data }) => data)
      .catch(console.log)
  );

  static createRandomNumber = numberLength => {
    let str = '';
    for (let i = 0; i < numberLength; i++)
      str += Math.floor(Math.random() * (DIGITS.MAX_VAL - DIGITS.MIN_VAL + 1) + DIGITS.MIN_VAL);
    return str;
  };
}

export default AppHelpers;
