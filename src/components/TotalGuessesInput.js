import SubmitHandlers from "../gameLogic/SubmitHandlers.js";
import { OptionsForm, OptionsInput } from "./styles.js";
import { OPTIONS } from '../constants.js';

const TotalGuessesInput = ({ totalGuesses, startNewGame, numberLength }) => {
  const { handleTotalGuessesSubmit } = new SubmitHandlers();
  const onTotalGuessesSubmit = e => handleTotalGuessesSubmit(e, startNewGame, numberLength);

  return (
    <OptionsForm onSubmit={onTotalGuessesSubmit}>
      <label>
        Enter desired number of total guesses 
        ({OPTIONS.MIN_TOTAL_GUESSES} - {OPTIONS.MAX_TOTAL_GUESSES}):
      </label>
      <OptionsInput name="totalGuesses" placeholder={totalGuesses} />
    </OptionsForm>
  );
};

export default TotalGuessesInput;
