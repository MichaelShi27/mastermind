import { OptionsForm, OptionsInput } from "../styles.js";
import getDigitsInputFunctions from "./logic.js";
import { OPTIONS } from '../../constants.js';

const DigitsInput = ({ numberLength, startNewGame, totalGuesses }) => {
  const { handleDigitsSubmit } = getDigitsInputFunctions(startNewGame, totalGuesses);

  return (
    <OptionsForm onSubmit={handleDigitsSubmit}>
      <label>
        Enter desired number of digits to guess ({OPTIONS.MIN_NUM_LENGTH} - {OPTIONS.MAX_NUM_LENGTH}):
      </label>
      <OptionsInput name="digits" placeholder={numberLength} />
    </OptionsForm>
  );
};

export default DigitsInput;
