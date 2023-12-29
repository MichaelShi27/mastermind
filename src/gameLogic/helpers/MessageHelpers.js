import { MESSAGES } from '../../constants.js';

class MessageHelpers {
  static createFeedbackMessage = (digitCount, locationCount) => {
    if (digitCount === 0) return MESSAGES.ALL_INCORRECT;
    const digitPlural = digitCount > 1 ? 's' : '';
    const locationPlural = locationCount !== 1 ? 's' : '';
    return `${digitCount} correct number${digitPlural} and ${locationCount} correct location${locationPlural}`;
  };

  static createInvalidGuessMessage = numberLength => `Please enter ${numberLength} numbers.`;
}

export default MessageHelpers;
