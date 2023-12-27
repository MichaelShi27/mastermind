import express from 'express';
const router = express.Router();
import axios from 'axios';

router.get('/number', (req, res) => {
  axios('https://www.random.org/integers', {
    params: { 
      num: req.query.numberLength, 
      min: 0, 
      max: 9, 
      col: 1, 
      base: 10, 
      format: 'plain', 
      rnd: 'new' 
    }
  })
    .then(({ data }) => res.send(data))
    .catch(console.log);
});

export default router;
