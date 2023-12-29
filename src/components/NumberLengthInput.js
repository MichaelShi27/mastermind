import SubmitHandlers from "../gameLogic/SubmitHandlers.js";
import { OptionsForm, OptionsInput } from "./styles.js";
import { OPTIONS } from '../constants.js';

const NumberLengthInput = ({ numberLength, startNewGame, totalGuesses }) => {
  const { handleNumberLengthSubmit } = new SubmitHandlers();
  const onNumberLengthSubmit = e => handleNumberLengthSubmit(e, startNewGame, totalGuesses);

  return (
    <OptionsForm onSubmit={onNumberLengthSubmit}>
      <label>
        Enter desired number of digits to guess ({OPTIONS.MIN_NUM_LENGTH} - {OPTIONS.MAX_NUM_LENGTH}):
      </label>
      <OptionsInput name="numLength" placeholder={numberLength} />
    </OptionsForm>
  );
};

export default NumberLengthInput;
