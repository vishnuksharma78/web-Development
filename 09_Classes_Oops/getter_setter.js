// class User{
//     constructor(email,password){
//         this.email = email ;
//         this.password = password ;
//     }

//     get email(){
//         return this._email.toUpperCase();
//     }
//     set email(value){
//         return this._email = value;
//     }
    
//     get password(){
//         // return this._password.toUpperCase();
//         return `${this._password}vyfyvs`
//     }
//     set password(value){
//         this._password = value;
//     }
// }

// const chai = new User("vishnu@gmail.com","123abc")
// console.log(chai.password);
// console.log(chai.email);


// function User(email,password){
//     this._email = email ;
//     this._password = password ;

//     Object.defineProperty(this,'email',{
//         get : function(){
//             return this._email.toUpperCase() ;
//         },
//         set : function(value){
//             this._email = value ;
//         }
//     })

//     Object.defineProperty(this,'password',{
//         get : function(){
//             return this._password.toUpperCase() ;
//         },
//         set : function(value){
//             this._password = value ;
//         }
//     })
// }

// const chai = new User("ram@chai","abc34")
// console.log(chai.email);
// console.log(chai.password);


const User = {
    _email : "gihnd@.com",
    _password : "abc",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this.email = value ;
    }
}

const tea = Object.create(User)
console.log(tea.email);