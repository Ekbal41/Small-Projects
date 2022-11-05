const btn = document.querySelector("button");
const SpeechRecognition = window.SpeechRecognition  || window.webkitSpeechRecognition;

const reco = new SpeechRecognition();
reco.onStart = function(){
    

}

reco.onresult = function(event){
  const spockenWord = event.results[0][0].transcript;
   comsp(spockenWord);
  
};

function comsp(words){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US"
    speech.pitch = .9;
    speech.volume= 1;
    speech.rate = 1;
    
    speech.text= words;
    console.log(speech)


     const o = window.SpeechSynthesis;
     o.speak(speech);



}

btn.addEventListener("click", () =>{
    reco.start();



});