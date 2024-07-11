
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

// function User(username ,loginCount,signIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.signIn = signIn
//     this.greetings = function(){
//         console.log(`welcome ${this.username}`);
//     }
//     return this   // it implicitly defined
// }


// new -=> it generates a new empty object
    //  constructor function is called
    // constructor take arguments from new(user passes)

// const user1 = new User("vishnu",12,true)  
// const user2 = new User("chai",10,false)  

// console.log(user1);
// console.log(user1.constructor);
// console.log(user2);



// Define a class

// class User {

//     constructor(username, age,password) {
//       this.username = username ;
//       this.age = age;
//       this.password = password
//     }
  
//    // Method
//     changeUsername() {
//       return `${this.username.toUpperCase()} `
//     }

//     encryptPassword(){
//         return `${this.password}@abc`
//     }
//   }
  
//   // Create an instance of the class
//   const vishnu = new User('kamal-hasan', 30,45123);
  
//   // Call the method
//   console.log(  vishnu.changeUsername() ); // Output: Hello, my name is Alice and I am 30 years old.
//   console.log(vishnu.encryptPassword());


  // Behind the scence

  function User(username, age,password){
    this.username = username ;
    this.age = age;
    this.password = password
  }

 // Method
  User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()} `
  }

  User.prototype.encryptPassword = function(){
      return `${this.password}@abc`
  }

  const chai = new User("Ram",200,789151)
  const tea = new User("shyam",30,74544)
  console.log(chai.encryptPassword());
  console.log(tea.changeUsername());