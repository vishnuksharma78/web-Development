//1 signleton -> we make a object using constructor
const obj = Object.create(null);
obj.name = "vishnu"
obj.age = 23
obj.city = "jaipur"
const sym = Symbol("key")
obj[sym] = "this is symbol"
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj["city"]);
// console.log(obj.sym);  // we can't acces using .
// console.log(obj[sym]); // for accessing symbol in  object
// console.log(obj);  

// object using literals
const jsUser = {
    name : "vishnu" ,
    age : 23,
    "full name" : "vishnu sharma",
    location : "jaipur",
    isLoggedIn : false,
    lastLogin : ["Monday","saturday"],
    [sym] : "this symbol"
}

jsUser.location = "pune" // to change values in object
// console.log(jsUser.name);
// console.log(jsUser["location"]);
// console.log(jsUser.full name); // it gives an erroe
// console.log(jsUser["full name"]);
// console.log(jsUser[sym]);
// console.log(jsUser);

// Object.freeze(jsUser) // to freeze object ->now we can't edit object
// jsUser.location = "Rajasthan"
// console.log(jsUser.location);  // did not work beacuse of freeze

// To add function in object
jsUser.greet = function(){
    console.log("Hi Good morning");
}
// jsUser.greet()  // it call function
// console.log(jsUser.greet);  // it shows only reference(it is a function)
// console.log(jsUser.greet());  // it return result and undefined because of console.log

// this refers to the current object
jsUser.show = function(){
    console.log(`Hi i am ${this.name} and i am from ${this.location}`);
}
// jsUser.show()