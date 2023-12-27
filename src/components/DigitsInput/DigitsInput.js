import { DigitsForm, OptionsInput } from "../styles.js";
import getDigitsInputFunctions from "./logic.js";

const DigitsInput = ({ numberLength, startNewGame }) => {
  const { handleDigitsSubmit } = getDigitsInputFunctions(startNewGame);

  return (
    <DigitsForm onSubmit={handleDigitsSubmit}>
      <label>Enter number of digits to guess (4 - 8): </label>
      <OptionsInput name="digits" placeholder={numberLength} />
    </DigitsForm>
  );
};

export default DigitsInput;
