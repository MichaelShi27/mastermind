class HighScores {
  #MAX_SCORES_COUNT = 10;

  constructor(highScores, guessesUsed, numLength) {
    this.highScores = highScores;
    this.guessesUsed = guessesUsed;
    this.numLength = numLength;
  }

  /*
    this function loops backwards through the highScores linked list,
    compares the new score to previous scores, & returns the node that 
    the new node will be inserted after. if the new score will be the 
    new head of the linked list, it returns null
  */
  getInsertLocation = () => {
    let currentNode = this.highScores.tail;
    let insertLocation = null;

    while (currentNode !== null) {
      insertLocation = currentNode;

      const { data: { numLength, guessesUsed } } = currentNode;
      if (this.numLength < numLength) break;
      if (this.numLength === numLength 
          && this.guessesUsed >= guessesUsed) break;

      if (insertLocation === this.highScores.head) 
        return null;
      currentNode = currentNode.prev;
    }
    return insertLocation;
  };

  getUpdatedScores = insertLocation => {
    if (insertLocation === this.highScores.tail 
        && this.highScores.length === this.#MAX_SCORES_COUNT)
      return null;
    this.highScores.insertAfterNode(insertLocation);
    return this.highScores;
  };
}

export default HighScores;
