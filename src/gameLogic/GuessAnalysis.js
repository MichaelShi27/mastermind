class GuessAnalysis {
  #guess;
  #num;

  constructor(guess, num) {
    this.#guess = guess;
    this.#num = num;
  }
  
  countMatches = () => {
    const digitCount = this.#countDigitMatches();
    if (digitCount === 0) return [ 0, 0 ];
  
    return [ digitCount, this.#countLocationMatches() ];
  };
  
  #countDigitMatches = () => {
    let digitMatchCount = 0;
  
    const digitMap = {};
    for (const digit of this.#num)
      digitMap[digit] = 1 + (digitMap[digit] || 0);
    
    for (const digit of this.#guess)
      if (digitMap[digit] > 0) {
        digitMap[digit]--;
        digitMatchCount++;
      }
    
    return digitMatchCount;
  };
  
  #countLocationMatches = () => {
    let locationMatchCount = 0;
  
    for (const [ idx, digit ] of this.#num.split('').entries())
      if (this.#guess[idx] === digit)
        locationMatchCount++;
  
    return locationMatchCount;
  };

  /*
    alternate, unused version of countMatches that counts both
    digit & location matches at once
  */
  #countMatchesAlternate = () => {
    let digitMatchCount = 0;
    let locationMatchCount = 0;
    const seen = {};
  
    for (const [ idx, digit ] of this.#num.split('').entries())
      seen[digit] = { 
        ...(seen[digit] || {}),
        count: 1 + (seen[digit]?.count || 0), 
        [idx]: true
      };

    for (const [ idx, digit ] of this.#guess.split('').entries()) {
      if (seen[digit]?.count > 0) {
        seen[digit].count--;
        digitMatchCount++;
      }
      if (seen[digit]?.[idx] === true)
        locationMatchCount++;
    }
    
    return [ digitMatchCount, locationMatchCount ];
  };
}

export default GuessAnalysis;
