import SubmitHandlers from "./SubmitHandlers.js";
  
class SpeechRecognition {
  #UNRECOGNIZED_MESSAGE = "I didn't recognize that command.";
  #ERROR_MESSAGE = 'Error occurred in speech recognition. Please try again!';
  #keyDownEvent;
  #appObj;

  constructor(keyDownEvent, appObj) {
    this.#keyDownEvent = keyDownEvent;
    this.#appObj = appObj;
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

    const { setMessage } = this.#appObj;
    recognition.onnomatch = () => setMessage(this.#UNRECOGNIZED_MESSAGE);
    recognition.onerror = () => setMessage(this.#ERROR_MESSAGE);
  };

  #handleSpeech = (speechEvent, recognition) => {
    recognition.stop();
    const speech = speechEvent.results[0][0].transcript;
    SubmitHandlers.handleGuessSubmit(this.#keyDownEvent, this.#appObj, speech);
  };
}

export default SpeechRecognition;
