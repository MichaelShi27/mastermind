class HighScores {
  #MAX_SCORES_COUNT = 10;

  constructor(highScores, guessesUsed, numLength) {
    this.highScores = highScores;
    this.guessesUsed = guessesUsed;
    this.numLength = numLength;
  }

  checkHighScores = () => {
    const { highScores: { length } } = this;
    if (length === 0) return 0;

    let idxToReplace = null;
    for (let i = length - 1; i >= 0; i--) {
      const { numLength, guessesUsed } = this.highScores[i];
      if (this.numLength < numLength) break;
      if (this.numLength === numLength 
          && this.guessesUsed >= guessesUsed) break;
      idxToReplace = i;
    }
    if (idxToReplace === null)
      // if highScores hasn't reached max length, we'll insert the
      // current high score no matter what by returning 'length'
      return length < this.#MAX_SCORES_COUNT ? length : -1;
    return idxToReplace;
  };

  updateHighScores = newScoreIdx => {
    const scoresCopy = this.highScores.slice();
    const loopCount = scoresCopy.length 
        + (scoresCopy.length < this.#MAX_SCORES_COUNT ? 1 : 0);
    let temp = scoresCopy[newScoreIdx];
    scoresCopy[newScoreIdx] = { 
        guessesUsed: this.guessesUsed, numLength: this.numLength };

    for (let i = newScoreIdx + 1; i < loopCount; i++) {
      temp = scoresCopy[i];
      scoresCopy[i] = scoresCopy[i - 1];
    }
    return scoresCopy;
  };
}

export default HighScores;
