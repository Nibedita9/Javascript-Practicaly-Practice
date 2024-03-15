// Expression and operators

// types of opeartors assignment ,arithmetic , comparisio , logical,string,unary,ternary , type 

// console.log();


// assignment =,/,+,*,-

let a=9;
let b=7;
let sum=a+b;
console.log(sum);

let divide ="hello" / b;
console.log(divide); // NAN  becaus we can not do this becasuse string and number

let chec=0.1 + 0.1;
console.log(chec);// 1.6


// comparision == ,< , >

console.log(3 == 3); // true
console.log("3" == 3); // true

console.log(3 === 3); // true
console.log("3" === 3); // false because one string and another number data type  with value checked 

console.log(8 < 8); // false
console.log(9>  3); // true


console.log(8 <= 8); // true
console.log(9 >= 3); // true




// logical && , || , ! 

console.log(3 == 3 &&  4== 8); // false
console.log(3 == 3 ||  4== 8); // true


// write a programm that determines if a person is eligible 
// to drive based on their age being greater than or equal to 18 and having a valid driver license 

// dry right case
// should be :- 
// age=18 
// age >= 18 
// driverlicense=true then he or she can eligible for driving


// let age=prompt("what is your age ?");
let age=33;
let drivingLicense=true;
if(age >=18 && drivingLicense==true){
    console.log(" Congratulations , you are eligible for drive");
}
else{
    console.log("you can not drive");

}


// ternary operator 
// condition ?true:false;


let aged = 18;
let result = aged>=56 ? "eligible" :"not eligible ";
console.log(result);


let score = 80;
let resultMark = score>60 ? "pass" :"not pass ";
console.log(resultMark);

console.log(9 < 78 < 0); // true
console.log("20" +10 +10); // true

