import express from 'express';
const router = express.Router();
import axios from 'axios';

router.get('/number', (req, res) => {
  axios('https://www.random.org/integers', {
    params: { 
      num: 4, 
      min: 0, 
      max: 7, 
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
