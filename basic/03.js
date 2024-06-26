// operations

// console.log(1+"2");  // 12
// console.log("1"+2);  // 12
// console.log(3+1+"2");   // 42
// console.log(1+"2" + 3); //123
// console.log("2"+2+3);   // 223

// console.log(true);  // true
// console.log(+true);  // 1
// console.log(+"");  // 0

// increment or decrement 
let counter = 100 
++counter
// console.log(counter);  // 101
let newCounter = counter++ 
// console.log(newCounter)  // 101
// console.log(counter)  // 102

const id = Symbol('123')
const id2 = Symbol('123')
// console.log(id==id2);  // false beacuse id and id2 are unique 

// console.log("2">1);  // true
// console.log("02">1);  // true

// console.log(null>0);  // false
// console.log(null==0);  // false
// console.log(null>=0); // true

// console.log("2"==2);  // true -> == checks only values 
// console.log("2"===2);  // false -> === checks value as well as obeject reference

// examples of non-primitive data types

const names = ["Ram","shyam","sita","lakshmi","vishnu"]  // array
// console.log(names);
// console.log(names.sort());
// console.log(names.length);  // returns length
names[0] = "krishan"  // for change values in arr
// console.log(names[0]);  // krishan

const obj = {
    name : "vishnu",
    age : 23,
    city : "jaipur"
}
// console.log(obj);
// console.log(obj.name); // we can access data using . operator 
obj.age = 28  // To change values in obj
// console.log(obj.age);  // 28

const fun = function(){
    console.log("jai shree Ram");
}

// console.log(fun());

