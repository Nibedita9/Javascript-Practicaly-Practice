let generateButton=document.getElementById("generateButton");
let result =document.getElementById("result");

generateButton.addEventListener('click' , () =>{
    const randomNumber=Math.floor(Math.random()* 100) +1 ;
    // console.log(randomNumber);
    result.innerHTML=` Random Number : ${randomNumber}`;
})