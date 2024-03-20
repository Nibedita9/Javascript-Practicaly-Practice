let speechSynthesis = window.speechSynthesis;
let speechUtterance = new SpeechSynthesisUtterance();
let textArea = document.getElementById('textArea');
let submitBtn = document.getElementById('submitBtn');
let wordCount =document.getElementById("word");
let characterCount =document.getElementById("character");


// Event listener for the submit button
submitBtn.addEventListener('click', function() {
  // Set the text to be spoken
  speechUtterance.text = textArea.value;
  // Speak the text
  speechSynthesis.speak(speechUtterance);
  // character counter 
  characterCount.innerHTML=textArea.value.length;
  console.log(wordCount);

  // word counter 

  const wordArray= textArea.value.split(" ").filter((word) => word !== " ");
  // console.log(wordArray);
  wordCount.innerHTML=wordArray.length;


});

