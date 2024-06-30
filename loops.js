// itration

// for loop 
// for (let i = 1; i <= 10; i++) {
//     if (i == 4) {
//         console.log("4 is the best num");
//     }
//     console.log(i);
// }

// itrate on array
// let arr = [3,45,23,67,11,78]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// nasted loop -> print all tables from 1 to 10

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//        console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// Continue 

// for (let i = 0; i < 10; i++) {
//     if (i==5) {
//         continue
//     }
//     console.log(i);
// }

// break
// for (let i = 0; i < 10; i++) {
//     if (i==5) {
//         break
//     }
//     console.log(i);
// }


// While Loop

// while(condition){
//     // code
// }

// let idx = 0
//  while(idx <= 10){
//         console.log(idx);
//         idx = idx + 2 
// }

// let myArr = ["flash","batman","superman"]
// let idx = 0
// while(idx < myArr.length){
//     console.log(myArr[idx]);
//     idx = idx+1
// }

// let score = 12
// do{
//     console.log(`score is ${score}`);
//     score++ 
// }while(score<=10)

// Array specific loops
//  for of loop

// const arr = [1,3,5,7,8,9]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }


// Maps ->Stores unique values and insertion order preserved 
// maps are not itratable
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"Unite")
map.set('FR',"FRANCE")
map.set('IN',"INDIA") // did not add Beacuse map stores unique
// console.log(map);

// loop on map
// for (const [key,value] of map) {
//     console.log(key , ':',value);
// }

// For in loop

const myObj = {
    js : "JavaScript",
    Cpp : "c++",
    rb : "swift by apple"
}

// for (const key in myObj) {
//    console.log(`${key} shortcut is for ${myObj[key]}`);
// }

// const arr =["java","c","c++","python"]

// for (const key in arr) {
//    console.log(arr[key]);
// }

// for each loop
const arr =["java","c","c++","python","Ruby"]

// arr.forEach(function (val){
//     console.log(val);
// })

// arr.forEach( (item)=> {
//     console.log(item);
// })

// arr.forEach(e => {
//     console.log(e);
// });

// function printMe(item){
//     console.log(item);
// }
// arr.forEach((printMe))

// arr.forEach((item ,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [
    {langName : "javascript", langFileName : "js"},
    {langName : "java", langFileName : "java"},
    {langName : "python", langFileName : "py"},
]

myCoding.forEach((item)=>{
    console.log(item.langName);
})
