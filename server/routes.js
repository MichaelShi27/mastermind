import express from 'express';
const router = express.Router();
import axios from 'axios';
import { DIGITS } from '../src/constants.js';

router.get('/number', (req, res) => {
  axios('https://www.random.org/integers', {
    params: { 
      num: req.query.numberLength, 
      min: DIGITS.MIN_VAL, 
      max: DIGITS.MAX_VAL, 
      col: 1, 
      base: 10, 
      format: 'plain', 
      rnd: 'new' 
    }
  })
    .then(({ data }) => res.send(data))
    .catch(err => {
      const data = err.response?.status === 404 ? '404' : err;
      res.send(data);
      console.log(err);
    });
});

export default router;
