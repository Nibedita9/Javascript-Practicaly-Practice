const textareaElement=document.getElementById("textarea");
const totalCharacter= document.getElementById("character");
const remainElement= document.getElementById("remain");

textareaElement.addEventListener('keyup', ()=>{
    updateCounter();
});

updateCounter(); // function call here because it will be update remain length
function updateCounter(){
    totalCharacter.innerText=textareaElement.value.length;
    remainElement.innerText=textareaElement.getAttribute('maxLength') - textareaElement.value.length;
}



