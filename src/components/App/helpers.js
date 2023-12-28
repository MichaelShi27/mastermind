import axios from 'axios';
import { DIGITS } from '../../constants.js';

export const fetchNumber = numberLength => (
  axios('/api/number', { params: { numberLength } })
    .then(({ data }) => data)
    .catch(console.log)
);

export const createInvalidGuessMessage = numberLength => `Please enter ${numberLength} numbers.`;

export const createRandomNumber = numLength => {
  let str = '';
  for (let i = 0; i < numLength; i++)
    str += Math.floor(Math.random() * (DIGITS.MAX_VAL - DIGITS.MIN_VAL + 1) + DIGITS.MIN_VAL);
  return str;
};
