class GuessAnalysis {
  constructor(guess, num) {
    this.guess = guess;
    this.num = num;
  }
  
  countMatches = () => {
    const digitCount = this.#countDigitMatches();
    if (digitCount === 0) return [ 0, 0 ];
  
    return [ digitCount, this.#countLocationMatches() ];
  };
  
  #countDigitMatches = () => {
    let digitMatchCount = 0;
  
    const digitMap = {};
    for (const digit of this.num)
      digitMap[digit] = 1 + (digitMap[digit] || 0);
    
    for (const digit of this.guess)
      if (digitMap[digit] > 0) {
        digitMap[digit]--;
        digitMatchCount++;
      }
    
    return digitMatchCount;
  };
  
  #countLocationMatches = () => {
    let locationMatchCount = 0;
  
    for (const [ idx, digit ] of this.num.split('').entries())
      if (this.guess[idx] === digit)
        locationMatchCount++;
  
    return locationMatchCount;
  };
}

export default GuessAnalysis;
