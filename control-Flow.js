// Logic Flow or Control Flow
// if
if(true){
    // code execute
}
if (false) {
    // code not execute
}

// let age = 28 ;
// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("you can't vote");
// }

const balance = 1000
// if (balance > 500)  console.log("test")
// if (balance > 500)  console.log("test"),console.log("it sec line");

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else{
//     console.log(`balance is ${balance}`);
// }

// if (2>=3 && 4==5) {
//     console.log("it's run");
// }

const userLoggined = true ;
const loggedInEmai = true ;

// if(userLoggined && loggedInEmai){
//     console.log("You can acess");
// }

// if (userLoggined || loggedInEmai) {
//     console.log("you can logic ");
// }

// switch case 

// const month = 3 ;
// switch(month){
//     case 1 : console.log("jan");
//     break ;
//     case 2 : console.log("Feb");
//     break ;
//     case 3 : console.log("mar");
//     break ;
//     case 4 : console.log("Apr");
//     break ;
//     case 5 : console.log("May");
//     break ;
//     default : console.log("Other month");
// }


// falsy value
// false , 0 , -0 , BigInt , 0n,"" , null , undefined , NaN 

// truthy values
// "0" , 'false'," ",[],{},function(){} and all other values 

// false == 0 -> true
// false == "" -> true 
// 0 == "" -> true

const arr = []
// if(arr){  // evaluate as true
//     console.log("hi");
// }

// if (arr.length === 0) {  // evaluate as true
//     console.log("empty array");
// }

const obj = {}
// if (obj) {  // evaluate as true
//     console.log("Hello");
// }

// if (Object.keys(obj).length == 0) {  // How to check object is empty
//     console.log("empty object ");
// }


// Nullish Coalescing Operator (??) : null undefined (special case)

let val1 ;
// val1 = 5 ?? 10  // val1 have 5
// val1 = null ?? 10  // val1 have 10
// val1 = undefined ?? 15 // val1 have 15
// val1 = null ?? 10 ?? 20 // val1 have 10
// val1 = null ?? undefined // val1 have undefined
// val1 = undefined ?? null  //val1 have null
// val1 = undefined ?? null ?? 20  // val1 have 20
// val1 = null ?? undefined ?? 20  // val1 have 20
// console.log(val1);