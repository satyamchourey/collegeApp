
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new window.SpeechRecognition();
var bol=document.getElementById("bol");
function convertVoice(){

recognition.onresult = (event) => {
  const speechToText = event.results[0][0].transcript;
  console.log(speechToText);

  if(speechToText=="open result"){
window.location="results.html";
  }
}
recognition.start();

}

var bol = document.getElementById("bol");
bol.addEventListener("click",convertVoice);
