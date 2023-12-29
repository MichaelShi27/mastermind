import { MESSAGES } from '../../constants.js';

class MessageHelpers {
  createFeedbackMessage = (digitCount, locationCount) => {
    if (digitCount === 0) return MESSAGES.ALL_INCORRECT;
    const digitPlural = digitCount > 1 ? 's' : '';
    const locationPlural = locationCount !== 1 ? 's' : '';
    return `${digitCount} correct number${digitPlural} and ${locationCount} correct location${locationPlural}`;
  };

  createInvalidGuessMessage = numberLength => `Please enter ${numberLength} numbers.`;
}

export default MessageHelpers;
