import SubmitHandlers from "../gameLogic/SubmitHandlers.js";
import { OptionsForm, OptionsInput } from "./styles.js";
import { OPTIONS } from '../constants.js';

// the input field where users can enter their desired number of total guesses
const TotalGuessesInput = ({ totalGuesses, startNewGame, numberLength }) => {
  const onTotalGuessesSubmit = e => SubmitHandlers.handleTotalGuessesSubmit(e, 
      startNewGame, { numberLength, totalGuesses });

  return (
    <OptionsForm onSubmit={onTotalGuessesSubmit}>
      <label>
        Enter desired number <br />
        of total guesses ({OPTIONS.MIN_TOTAL_GUESSES} - {OPTIONS.MAX_TOTAL_GUESSES}):
      </label>
      <OptionsInput name="totalGuesses" placeholder={totalGuesses} />
    </OptionsForm>
  );
};

export default TotalGuessesInput;
