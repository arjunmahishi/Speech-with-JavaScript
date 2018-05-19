var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.continuous = true;

recognition.onend = function() {
    recognition.start();
}

recognition.onresult = function(event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    speak(transcript)
}

recognition.start();

    