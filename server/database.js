import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/mastermind')
  .then(() => console.log("mongoose is running!"))
  .catch(err => console.log('mongoose initial connection error:', err));

const db = mongoose.connection;

// listens for errors after the initial connection 
db.on('error', err => console.log('mongoose connection error:', err));

export default db;
