
// class User{
//     constructor(username){
//         this.username = username ;
//     }

//     logMe(){
//         console.log(`username : ${this.username}`);
//     }
// }

// class Teacher extends User {
//     constructor(username,email,password){
//         super(username)
//         this.email = email;
//         this.password = password;
//     }
//     addCourse(){
//         console.log(`course added by ${this.username}`);
//     }
// }

// const chai = new Teacher("vishnu","vishnu@gmail.com",123)
// chai.addCourse()
// chai.logMe()

// const masalachai = new User("krishna ")
// masalachai.logMe()
// // masalachai.addCourse()

// console.log(chai === masalachai);
// console.log(chai instanceof Teacher);
// console.log(chai instanceof User);
// console.log(masalachai instanceof User);
// console.log(masalachai instanceof Teacher);


// properties

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }

    static createdId(){
        return `123`
    }
}

// const vishnu = new User("vishnu")
// vishnu.logMe()
// console.log(vishnu.createdId());  it will give an error because of static keyword

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }

}

const iphone = new User("iphone","iphone@fb.com")
console.log(iphone);
