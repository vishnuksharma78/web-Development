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


const tinder = new Object() ; // object created using singleton
tinder.name = "vishnu"
tinder.age = 34 
tinder.email = "vi@gmail.com"

const obj1 ={
    1 : "a",
    2 : "b"
}
const obj2 = {3 : "c",4 : "d"}
// console.log(tinder);
// console.log(obj1);

// To comine two object

// const obj3 = {obj1,obj2}  // it gives object inside object 
// console.log(obj3);

// const obj4 = Object.assign({},obj1,obj2) // (targert,sourc1 ,source2 ...)
// console.log(obj4);

// const obj5 = {...obj1,...obj2} // Mostely used method to combine two objects
// console.log(obj5);

// Array of objects
// const users = [
//     {id : 101 , name : "shiv"},
//     {id : 102 , name : "kamal"},
//     {id : 103 , name : "sharad"}
// ]
// console.log(users[0].id);
// console.log(users[1].name);

const insta = {
    username : "vishnu sharma",
    password : "karan345",
    likes : 2993
}
// console.log(Object.keys(insta));  // it returns array of keys 
// console.log(Object.values(insta)); // it returns array of values 
// console.log(Object.entries(insta)); // it returns nasted array of keys,values

// console.log(insta.hasOwnProperty("likes"));  // true -> it tells key,value is parsent or not in object

// destraction
// const {username} = insta ; // we can acces username not required insta.username(every time)
// console.log(username);
// const {username : name} = insta // we can give a short name also
// console.log(name);  // it is also equal to insta.username

// Json -> it is a file which is returns a response in the form of object or array(array objects)
 // json formatt data 
// {
//     "name" : "shiv",
//     "city" : "pune",
//     "temp" : "34",
//     [
//        "subject1" {
//         "name" : "hindi",
//         "marks" : "87"
//        },
//        "subject2" : {
//         "name" : "English",
//         "marks" : "79" 
//        },
//        "subject1" : {
//         "name" : "java",
//         "marks" : "96"
//        },
//     ]
// }

