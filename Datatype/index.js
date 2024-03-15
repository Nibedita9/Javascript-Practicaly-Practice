// first of all data types commonly Two types one is primitive data type and another is non-primitive data type 
// primitive data types are number , string , null , undesigned ,symbol , boolean , bigint this is single valued store the data 
// non primitive data types are objects , arrays which are container store complex data multi valued data store 



let Firstname="hello world";
console.log("First Name is : ", Firstname);



// what is the purpose of NAN 
// NaN is stands for not a number and it retruned a mathemathical opertion doesn't valid a valid number
// also it checks wheater a value is number or not 

console.log(isNaN("vinod")); // true because vinod is string not a number so output will be sowing NAN
console.log(isNaN(3)); // false 3 is a number

// NAN === NAN , why is it false

if(5 === 9){
    console.log("both are equal");
}
else{
    console.log("both are not equal");

}

 
if("naani" === "naani"){
    console.log("both are equal");
}
else{
    console.log("both are not equal");

}


if(NaN === NaN){
    console.log("both are equal");
}
else{
    console.log("both are not equal");

}

console.log(parseInt("xyz"));
console.log(parseInt("@#%"));

// concatenation

const str ="hello " +"world";
console.log(str);

// Type coercion

// type coercion is the automatic convert one data type to another data type 
// there is two type of coercion one is implicit another is explicit
// implicit will be happens automaticaly but explicit is done manually by the programmer

let sum = "5" + 10;
console.log(sum); //  510 because + mean here concate so its returned string with number add

let minus = "5" - 10;
console.log(minus);  // -5  // for type coercion "5" string data type 5 convert to number data type so output are happen

let mul = "5" * 10;
console.log(mul);  // 50

let sumS = " " +" ";
console.log(sumS); // empty space

let sumN = "hi" - "hi";
console.log(sumN); // NAn



