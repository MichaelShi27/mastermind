import axios from 'axios';

export const fetchNumber = numberLength => (
  axios('/api/number', { params: { numberLength } })
    .then(({ data }) => data)
    .catch(console.log)
);

export const createInvalidGuessMessage = numberLength => `Please enter ${numberLength} numbers.`;
