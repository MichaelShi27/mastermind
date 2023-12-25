import axios from 'axios';

export const fetchNumber = () => (
  axios('/api/number')
    .then(({ data }) => data)
    .catch(console.log)
);

