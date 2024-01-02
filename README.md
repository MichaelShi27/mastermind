## How To Run The App

1. Clone the repo and navigate to its root directory in the terminal
2. Run `npm install`
- If you experience a 404 error from npm making a request to Artifactory, try running `npm config set registry http://registry.npmjs.org/`
3. Run `npm run nodemon` to start the Express server
4. In a new terminal, run `npm start` to start the react-scripts server
5. http://localhost:3000/ should open automatically in your browser and display the app

## How To Play

Type or speak a number to make your guess! The 2 input boxes on the right control the length of the number you wish to guess & the number of guesses you have to guess the number.

## Code Structure

This app is built with the MERN stack (MongoDB, Express, React, Node). I tried to separate my concerns by keeping the React components in their own folder in `src/components`, then storing the game and component logic in `src/gameLogic`. 

I chose to use JavaScript because I felt the most comfortable building a full-stack app/game with it, since I've done so in the past. Although the vast majority of my coding at LinkedIn has been in Java, I didn't want my efficiency to be hindered by minor issues like syntax or setup, and I knew that my coding and back-end skills could still be demonstrated through JS.

My React components are written as functions with React Hooks, since function-based components and Hooks are the newer, preferred approach to React (instead of class-based components). Although I'm mostly used to functional programming when coding in JS, I strove to think in terms of OOP; I wrote almost all of the actual game logic in `src/gameLogic` as classes.

## Extensions

- difficulty options (where users can alter both the length of the number to guess and the number of guesses they are allowed) 
- speech recognition functionality for making guesses
- ordered list of high scores
- unit tests (run `npm test`)


## Reflection 


Although the data that this app deals with is of trivial size (e.g. the guesses are strings that are 4-8 characters long), I still tried to make my algorithms and functions as efficient as possible. 

A primary example is the `countMatches` method in `src/gameLogic/Guess.js`. I separated the functionality into 2 helper methods so that I could end and return early if needed. For the `#countDigitMatches` helper, I used an object as a frequency counter so that the algorithm would finish in O(n) time. (Just for fun, I also implemented `#countMatchesAlternate`, an unused O(n) solution that counts both digit and location matches at once.)

Another example is how I stored the user's high scores. I initially thought of using a sorted array, but then I realized that insertion of a new high score would be an O(n) operation. With a linked list, insertion would be O(1) (although finding the location to insert at would still be O(n)). I initially implemented a doubly linked list before realizing that this was unnecessary, and so I converted it to a singly linked list. The linked list holds the scores in ascending order, i.e. the head node is the worst high score and the tail node is the best - since a new high score is more likely to be lower rather than higher, it makes sense to minimize traversal time by starting with the lowest high score and going up.

I maintained this focus on efficiency for cases of minor importance. Before I wrote the current version of`validateGuess` method in `src/gameLogic/helpers/InputValidators.js`, I had 2 previous implementations for determining if all the characters in the `guess` string were numbers.

```
  1. 
  ... !guess.split('').reduce(
    (hasNonNumbers, char) => isNaN(Number(char)) || hasNonNumbers,
    false
  )

  2.
  ... !guess.split('').some(char => isNaN(Number(char)))
  ```

  I started with the .reduce approach, but then I realized that .some is more efficient because it only iterates  
  until it finds an element that fulfills the condition and can thus end early, whereas .reduce requires iterating 
  through the entire array. Although `guess` is a string of trivial length, I still considered what the most efficient solution would be for this problem as well as the other challenges I encountered throughout the development process.

  Overall, I'm satisfied with my work on this app. I do wish I hadn't spent so much time on certain tasks such as setting up tests, converting functions to classes, attempting to set up database actions, and integrating a linked list, especially since I'd performed many of these tasks before. With more time, I would've liked to add further extensions like hints, a timer, and login functionality. I also would want to expand my API routes and allow for persistent storage using a database so that high scores, login info, etc. could be saved.

