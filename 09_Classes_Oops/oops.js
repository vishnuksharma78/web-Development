
// const user = {   // it is also known as object literals
//     username : "vishnu",
//     loginCount : 4 ,
//     signIn : true ,

//     getDetails : function(){
//         // console.log("Got user details from DB");
//         // console.log(`username : ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user);
// console.log(user.username);
// user.getDetails()


// Constructor function

// const promiseOne = new Promise()
// const date = new Date()

function User(username ,loginCount,signIn){
    this.username = username
    this.loginCount = loginCount
    this.signIn = signIn
    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    }
    return this   // it implicitly defined
}


// new -=> it generates a new empty object
    //  constructor function is called
    // constructor take arguments from new(user passes)

const user1 = new User("vishnu",12,true)  
const user2 = new User("chai",10,false)  

// console.log(user1);
// console.log(user1.constructor);
// console.log(user2);



// // Define a class

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     // Method
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
  
//   // Create an instance of the class
//   const person1 = new Person('Alice', 30);
  
//   // Call the method
//   person1.greet();  // Output: Hello, my name is Alice and I am 30 years old.
  