const textarea = document.querySelector("textarea");
const voicelist = document.querySelector("select");
const speechBtn = document.querySelector("button");

let synth = window.speechSynthesis;
let isSpeaking = false;

function voices() {
  voicelist.innerHTML = ""; // Clear existing options
  for (let voice of synth.getVoices()) {
    let selected = voice.name === "Google US English" ? "selected" : "";
    let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
    voicelist.insertAdjacentHTML("beforeend", option);
  }
}

// Call voices() initially to populate voice options
voices();

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text) {
  let utterance = new SpeechSynthesisUtterance(text);
  for (let voice of synth.getVoices()) {
    if (voice.name === voicelist.value) {
      utterance.voice = voice;
    }
  }
  synth.speak(utterance);
}

speechBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textarea.value !== "") {
    if (!synth.speaking) {
      // If not speaking, speak textarea text
      textToSpeech(textarea.value);
      speechBtn.innerText = "Pause speech";
      isSpeaking = true;
    } else {
      if (isSpeaking) {
        synth.resume();
        isSpeaking = false;
        speechBtn.innerText = "Pause speech";
      } else {
        synth.pause();
        isSpeaking = true;
        speechBtn.innerText = "Resume speech";
      }
    }
  } else {
    speechBtn.innerText = "Convert To Speech";
  }
});
