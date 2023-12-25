import express from 'express';
import routes from './routes.js';
import './database.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
