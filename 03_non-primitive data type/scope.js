// scope 

function one(){
    const user = "Vishnu Kumar Sharma"
    function two(){
        const innerUser = "Krishan"
        console.log(user);
    }
    // console.log(innerUser);  // Give an Error Because it can't access outside block(Block scope)
    two()

}
// one()

// console.log(addOne(6));  // we can access these type of function before(anywhere) defination
function addOne(num){
    return num+1
}
// console.log(addOne(6));


// console.log(addTwo(8)); // it gives error use before initialization

const addTwo =function(num){
    return num+2
}
// console.log(addTwo(8));


 // this keyword

 const user = {
    username : "shiv sharma",
    coursePrice : 999,
    greetMsg : function(){
        // console.log(`${username},your welcome`); // we can't access without this keyword
        console.log(`${this.username},your welcome`);
        console.log(this);
    }
}

// user.greetMsg()
// user.username = "Raju Bhai"
// user.greetMsg()

// console.log(this);  // it returns empty object {} in node enviroment and returns window obj in Browser


const fun = ()=>{
    console.log(this);  // it also returns empty object {}
}
// fun()

function disp(){
    const user = "getCodr"
    console.log(this.user);  // undefined
}
// disp() 

const show = ()=>{
    const user = "getCodr"
    console.log(this.user);  // undefined
    console.log(user);  // getcodr
}
// show()


// IIFE - Immidiated Invoke Function Expression
// used to remove global variable pollution and to execute fast

 // named IIFE

(function one(){ 
    console.log("DB connect");
} )();   // it is known as IIFE

// un-named IIFE

((username)=>{  
    console.log(`DB Connect Sucessfully ${username}`);   // DB Connect Sucessfully vishnu
} )("vishnu");

