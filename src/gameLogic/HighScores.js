import { MAX_HIGH_SCORES_COUNT } from '../constants.js';

class HighScores {
  constructor(highScores, guessesUsed, numLength) {
    this.highScores = highScores;
    this.guessesUsed = guessesUsed;
    this.numLength = numLength;
  }

  /*
    this function loops through the highScores linked list,
    compares the new score to previous scores, & returns the node that 
    the new node will be inserted after. if the new score will be the 
    new head of the linked list, it returns null
  */
  getInsertLocation = () => {
    let currentNode = this.highScores.head;
    let insertLocation = null;

    while (currentNode !== null) {
      const { data: { numLength, guessesUsed } } = currentNode;
      if (this.numLength < numLength) break;
      if (this.numLength === numLength 
          && this.guessesUsed >= guessesUsed) break;
  
      insertLocation = currentNode;
      currentNode = currentNode.next;
    }
    return insertLocation;
  };

  getUpdatedScores = insertLocation => {
    if (insertLocation === null 
        && this.highScores.length === MAX_HIGH_SCORES_COUNT)
      return null;

    this.highScores.insertAfterNode({
      guessesUsed: this.guessesUsed,
      numLength: this.numLength
    }, insertLocation);
    return this.highScores;
  };
}

export default HighScores;
