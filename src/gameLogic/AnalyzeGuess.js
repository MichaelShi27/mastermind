class AnalyzeGuess {
  static getMatchCounts = (guess, num) => {
    const digitCount = this.#getDigitMatchCount(guess, num);
    if (digitCount === 0) return [ 0, 0 ];
  
    return [ digitCount, this.#getLocationMatchCount(guess, num) ];
  };
  
  static #getDigitMatchCount = (guess, num) => {
    let digitMatchCount = 0;
  
    const digitMap = {};
    for (const digit of num)
      digitMap[digit] = 1 + (digitMap[digit] || 0);
    
    for (const digit of guess)
      if (digitMap[digit] > 0) {
        digitMap[digit]--;
        digitMatchCount++;
      }
    
    return digitMatchCount;
  };
  
  static #getLocationMatchCount = (guess, num) => {
    let locationMatchCount = 0;
  
    for (const [ idx, digit ] of num.split('').entries())
      if (guess[idx] === digit)
        locationMatchCount++;
  
    return locationMatchCount;
  };
}

export default AnalyzeGuess;
