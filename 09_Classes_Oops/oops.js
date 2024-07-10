const user = {   // it is also known as object literals
    username : "vishnu",
    loginCount : 4 ,
    signIn : true ,

    getDetails : function(){
        console.log("Got user details from DB");
    }
}

console.log(user);
console.log(user.username);
user.getDetails()




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
  