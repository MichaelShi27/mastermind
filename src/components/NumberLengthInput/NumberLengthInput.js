import { OptionsForm, OptionsInput } from "../styles.js";
import getNumberLengthInputFunctions from "./logic.js";
import { OPTIONS } from '../../constants.js';

const NumberLengthInput = ({ numberLength, startNewGame, totalGuesses }) => {
  const { handleNumberLengthSubmit } = getNumberLengthInputFunctions(startNewGame, totalGuesses);

  return (
    <OptionsForm onSubmit={handleNumberLengthSubmit}>
      <label>
        Enter desired number of digits to guess ({OPTIONS.MIN_NUM_LENGTH} - {OPTIONS.MAX_NUM_LENGTH}):
      </label>
      <OptionsInput name="numLength" placeholder={numberLength} />
    </OptionsForm>
  );
};

export default NumberLengthInput;
