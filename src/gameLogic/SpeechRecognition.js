import SubmitHandlers from "./SubmitHandlers.js";
const { handleGuessSubmit } = new SubmitHandlers();
  
class SpeechRecognition {
  #UNRECOGNIZED_MESSAGE = "I didn't recognize that command.";
  #ERROR_MESSAGE = 'Error occurred in speech recognition. Please try again!';
  #keyDownEvent;
  #appVariables;

  constructor(keyDownEvent, appVariables) {
    this.#keyDownEvent = keyDownEvent;
    this.#appVariables = appVariables;
  }

  listenForSpeech = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
    const recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    const grammar = `#JSGF V1.0; grammar colors; public <option> = ${[].join(" | ")};`;
    speechRecognitionList.addFromString(grammar);
    
    recognition.grammars = speechRecognitionList;
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    recognition.onresult = e => this.#handleSpeech(e, recognition);

    const { setMessage } = this.#appVariables;
    recognition.onnomatch = () => setMessage(this.#UNRECOGNIZED_MESSAGE);
    recognition.onerror = () => setMessage(this.#ERROR_MESSAGE);
  };

  #handleSpeech = (speechEvent, recognition) => {
    recognition.stop();
    const speech = speechEvent.results[0][0].transcript;
    handleGuessSubmit(this.#keyDownEvent, this.#appVariables, speech);
  };
}

export default SpeechRecognition;
