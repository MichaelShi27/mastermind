import SubmitHandlers from "./SubmitHandlers.js";
const { handleGuessSubmit } = new SubmitHandlers();
  
class SpeechRecognition {
  #UNRECOGNIZED_SPEECH_MESSAGE = "I didn't recognize that command.";
  #SPEECH_RECOGNITION_ERROR_MESSAGE = 'Error occurred in speech recognition. Please try again!';

  listenForSpeech = (keyDownEvent, appVariables) => {
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
    
    recognition.onresult = e => this.#handleSpeech(e, keyDownEvent, appVariables, recognition);

    const { setMessage } = appVariables;
    recognition.onnomatch = () => setMessage(this.#UNRECOGNIZED_SPEECH_MESSAGE);
    recognition.onerror = () => setMessage(this.#SPEECH_RECOGNITION_ERROR_MESSAGE);
  };

  #handleSpeech = (speechEvent, keyDownEvent, appVariables, recognition) => {
    recognition.stop();
    const speech = speechEvent.results[0][0].transcript;
    handleGuessSubmit(keyDownEvent, appVariables, speech);
  };
}

export default SpeechRecognition;
