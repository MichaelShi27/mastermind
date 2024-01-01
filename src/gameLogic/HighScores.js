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
    the new node will be inserted behind, i.e. the highest score it beats. 
    if the new score will be the new head of the linked list, it returns null
  */
  getInsertLocation = () => {
    let currentNode = this.highScores.head;
    let insertLocation = null;

    while (currentNode !== null) {
      const { data: { numLength, guessesUsed } } = currentNode;
      if (this.#beatsScore(numLength, guessesUsed) === false) break;
      insertLocation = currentNode;
      currentNode = currentNode.next;
    }
    return insertLocation;
  };

  /*
    this function computes if one score beats another. a score is
    better if it has higher numLength, or if numLength is tied then
    if it has lower guessesUsed
  */
  #beatsScore = (numLength, guessesUsed) => (
    this.numLength > numLength || (this.numLength === numLength 
        && this.guessesUsed < guessesUsed)
  );

  getUpdatedScores = insertLocation => {
    // if the node would be the new head but the list is max length,
    // then we shouldn't insert the node at all
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
