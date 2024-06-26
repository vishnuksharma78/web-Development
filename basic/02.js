// variables
const a = 123 ;
let b = 23 ;
var c = 45 ;
d=56 ;

// To find data type of variable
// console.log(typeof a)

//  a = 67  // gives an error beacuse we can't change constant variable 
b = "vishnu"
d = "Radha"
// console.table([b,c,d])  // to print variables in table format 

/*
This is multi-line comment
*/

let value ;
// console.log(value)  // gives undefined - varibales which is not assign values is by default  undefined




// data types 
 // 2 types based on how variables stors in memory
 // 1 primitive -> String, Number ,Boolean ,null , undefined , bigInt,symbol (call by value means pass a copy of varibles)
 // 2 non-primitive -> array , object , functions (also known as reference data types , call by reference passes original variable )
 
 // examples 
 let name = "vishnu"
 let num = 23
 let bool = true 
 let unde; 
 let temp = null 
//  console.log(typeof temp);
 let id = Symbol(123)
//  console.log(id);
//  console.log(typeof id);


 // conversion 

 let s = "23a"
 let numV = Number(s)  // it gives NaN - Not a number 
//  console.log(numV)

 let undef = undefined 
 let value2= Number(undef) 
//  console.log(value2);

// 1 -> true , 0 -> false 
let str = ""
let newStr = Number(str)  // empty string gives 0
// console.log(newStr);

let str2 = "Ram"
let newStr2 = Number(str2)  // it gives NaN-not a number
// console.log(newStr2);

