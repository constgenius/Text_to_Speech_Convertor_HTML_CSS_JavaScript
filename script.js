let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    const selectedVoiceIndex = 150;
    speech.voice = voices[selectedVoiceIndex];
    voices.forEach((voice,i)=>{
        const option = new Option(voice.name , i);
        voiceSelect.options.add(option);
    })
    voiceSelect.selectedIndex = selectedVoiceIndex;
}

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})