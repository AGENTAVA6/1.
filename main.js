var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}
recognition.onresult = function(event){
    console.log(event)
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if(Content ==  "take my selfie"){
        speak()
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds!";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis)
}