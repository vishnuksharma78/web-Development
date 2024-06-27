// stack and heap 
//  stack memory -> stack is used to store primitive data types . 
// in stack values are passes by call by value means pass a copy of value not original value
// Heap memory - > heap memory is used in non-primitive data types like array,object,functions .
//   in heap the values are passed by reference means changes in origional values 

// example of stack and heap
let person ="vishnu"
let person2 = person
person2="krishna"  // it will change only person2 value beacuse it take only copy of variable 
// console.log(person)
// console.log(person2)
let user = {
    email:"user@gmail.com",
    upi : "user@ybl"
 }
let user2 = user 
user2.email = "github@gmail.com"  // it changes email in user1 and 2 because it takes reference.

// console.log(user2);
// console.log(user)


const name = "vishnu"
const repo = 20 
// console.log(`Hello my name is ${name} and i have ${repo}`);

const game = new String("  shiv sha ram   ")
// console.log(game.charAt(2));
// console.log(game.indexOf('s'));
// console.log(game.lastIndexOf('s'));
// console.log(game.includes('sh'));
// console.log(game.split(' '));
// console.log(game.slice(-5,11));
// console.log(game.substring(2,6));
// console.log(game.replace('ram','sita'));
// console.log(game.trim());
// console.log(game.toUpperCase());
// console.log(game[0]);
// to travas string 
// for(let i = 0 ; i<game.length ; i++){
//     console.table(game[i] + " ");
// }


// Nmber and Math

let num = 100.2099 
let num2 = new Number(200)  // to create object in number 
// console.log(num.toString());  // it converts number into string 
// console.log(num.toFixed(2));  // it will fixed values after decimal
// console.log(num.toPrecision(3)); // 100 -> toprecision method returns digits 
// console.log(num.toPrecision(2)); // 1.0e+2
// console.log(num.toPrecision(4)); // 100.2

const zeros = 10000000 ;
// console.log(zeros.toLocaleString());  // 10,000,000
// console.log(zeros.toLocaleString('en-IN'));  // 1,00,00,000

const min = Number.MIN_VALUE  // minimum value in javascript 
const max = Number.MAX_VALUE  // maximum value in javascript 
// console.log(max);
// console.log(min)

// Math object 

// console.log(Math.abs(-23));
// console.log(Math.random());
// console.log(Math.round(23.75));
// console.log(Math.ceil(23.23));
// console.log(Math.trunc(23.67));
// console.log(Math.floor(23.97));
// console.log(Math.SQRT1_2);
// console.log(Math.PI);
// console.log(Math.SQRT2);

// console.log(Math.pow(2,4));
// console.log(Math.min(2,4,1,3,5,7));
// console.log(Math.max(1,3,56,67,2,4));

// Generates 1 to 10 random numbers 
// console.log(Math.floor((Math.random() * 10)+1));
// console.log(Math.floor((Math.random() * 10)+1));
// console.log(Math.floor((Math.random() * 10)+1));

// generate a value b/w given range 
// const minValue = 10
// const maxValue = 20 
// console.log(Math.floor(Math.random()*(maxValue-minValue + 1))+minValue);


// Date and Time 
let date = new Date()
// console.log(typeof date);  // object 
// console.log(date);
// console.log(date.toString());
// console.log(date.getUTCFullYear());
// console.log(date.toLocaleTimeString());

// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getMilliseconds());
// console.log(date.toDateString());
// let currDate = Date.now(2024,0,23)


// let newDate = new Date(2023,0,23)
let newDate = new Date("2023-02-23")
// console.log(`${newDate.getDate()} : ${newDate.getMonth()} : ${newDate.getFullYear()}`);
// console.log(newDate.toLocaleString('default',{ weekday : "long"}));
// console.log(newDate.toDateString());
// console.log(newDate.toISOString());
// console.log(newDate.toJSON());
// console.log(newDate.getTime());
// let d = Date.now()
// console.log(d);


