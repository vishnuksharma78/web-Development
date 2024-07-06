// variables
const a = 123 ;
let b = "vi" ;
var c = true ;
// let d;
let e = null  // null type is object 
// console.table([a,b,c,e]);

// console.log(typeof a);  //number
// console.log(typeof b);  //string
// console.log(typeof c);  //boolean
// console.log(typeof d);  // undefined
// console.log(typeof e);  //object

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
//  console.log(typeof temp);  // object
 let id = Symbol(123)
//  console.log(id);
//  console.log(typeof id);


 // conversion 

 let s = "23a"
 let numV = Number(s)  // it gives NaN - Not a number 
//  console.log(numV)

 let undef = undefined 
 let value2= Number(undef) 
//  console.log(value2);  // NaN

// 1 -> true , 0 -> false 
let str = ""
let newStr = Number(str)  // empty string gives 0
// console.log(newStr);

let str2 = "Ram"
let newStr2 = Number(str2)  // it gives NaN-not a number
// console.log(newStr2);

// increment , decrement
// let aa = 10
// let bb = ++aa 
// let cc = bb++ 
// //console.table([aa,bb,cc]);

// let a1 = 21 
// let b1 =--a1 // a1-20 ,b1-20
// let c1 = a1--  // c1-20 a1-19
// console.table([a1,b1,c1]);

let a3 = 5
let a4 = a3 
a4 = 10 
// console.log(a3,a4); // a3 still has 5 becsuse of stack memory(copy of value)

let user = {
    name : "karan",
    price : 999
}
let user2 = user 
user2.name = "Arjun"  // it changes name in both object because it pass by reference(Heap memory)

// console.log(user);
// console.log(user2);