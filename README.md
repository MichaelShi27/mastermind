## How To Run The App

1. clone the repo and navigate to its root directory in the terminal
2. run `npm install`
3. run `npm run nodemon` to start the Express server
4. in a new terminal, run `npm start` to start the react-scripts server
5. http://localhost:3000/ should open automatically in your browser and display the app

## How To Play

Type or speak a number to make your guess! The 2 input boxes on the right control the length of the number you wish to guess & the number of guesses you have to guess the number.

## Code Structure

This app is built with the MERN stack (MongoDB, Express, React, Node). I tried to separate my concerns by keeping the React components in their own folder in `src/components`, then storing the game and component logic in `src/gameLogic`. 

I chose to use JavaScript because I felt the most comfortable building a full-stack app/game with it, since I've done so in the past. Although the vast majority of my coding at LinkedIn has been in Java, I didn't want my efficiency to be hindered by minor issues like syntax or setup, and I knew that my coding and back-end skills could still be demonstrated through JS.

My React components are written as functions with React Hooks, since function-based components and Hooks are the newer, preferred approach to React (instead of class-based components). Although I'm mostly used to functional programming when coding in JS, I strove to think in terms of OOP; I wrote almost all of the actual game logic in `src/gameLogic` as classes.

## Extensions

- difficulty options (where users can alter both the length of the number to guess and the number of guesses they are allowed), 
- voice functionality for making guesses
- list of high scores
