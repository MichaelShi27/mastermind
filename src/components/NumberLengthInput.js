import SubmitHandlers from "../gameLogic/SubmitHandlers.js";
import { OptionsForm, OptionsInput } from "./styles.js";
import { OPTIONS } from '../constants.js';

// the input field where users can enter their desired number of digits to guess
const NumberLengthInput = ({ numberLength, startNewGame, totalGuesses }) => {
  const onNumberLengthSubmit = e => SubmitHandlers.handleNumberLengthSubmit(e, 
      startNewGame, { totalGuesses, numberLength });

  return (
    <OptionsForm onSubmit={onNumberLengthSubmit}>
      <label>
        Enter desired number <br />
        of digits to guess ({OPTIONS.MIN_NUM_LENGTH} - {OPTIONS.MAX_NUM_LENGTH}):
      </label>
      <OptionsInput name="numberLength" placeholder={numberLength} />
    </OptionsForm>
  );
};

export default NumberLengthInput;
