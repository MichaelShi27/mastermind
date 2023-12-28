import { OptionsForm, OptionsInput } from "../styles.js";
import getTotalGuessesInputFunctions from "./logic.js";
import { OPTIONS } from '../../constants.js';

const TotalGuessesInput = ({ totalGuesses, startNewGame, numberLength }) => {
  const { handleTotalGuessesSubmit } = getTotalGuessesInputFunctions(startNewGame, numberLength);

  return (
    <OptionsForm onSubmit={handleTotalGuessesSubmit}>
      <label>
        Enter desired number of total guesses ({OPTIONS.MIN_TOTAL_GUESSES} - {OPTIONS.MAX_TOTAL_GUESSES}):
      </label>
      <OptionsInput name="totalGuesses" placeholder={totalGuesses} />
    </OptionsForm>
  );
};

export default TotalGuessesInput;
