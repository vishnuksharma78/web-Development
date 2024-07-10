
function multiple(num){
    return num*5
}
multiple.power = 2

// console.log(multiple(4));
// console.log(multiple.power);
// console.log(multiple.prototype);

function createUser(username,price){
    this.username = username
    this.price = price
}

createUser.prototype.incrment = function(){
    this.price++ ;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)
// chai.printMe()
// tea.printMe()

// console.log(chai);
// console.log(tea);

let muName = "vishnu   "
// console.log(muName.trim().length);

let myHeros = ["Thor","Spider-man"]
let heroPower = {
    thor : "hammer",
    spiderman : "sling" ,

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vishnu = function(){
    console.log("vishnu is present in all object");
}

Array.prototype.sayMyName = function(){
    console.log("my name is vishnu");
}

// heroPower.vishnu()
// myHeros.vishnu()
// myHeros.sayMyName();

// heroPower.sayMyName();  // it gives an error



// inheritence 

const user = {
    name : "chai",
}
const Teacher = {
    makeVideo : true
}

const TechnicalSupport = {
    isAvailable : false
}

const TaSupport = {
    makeAssignment : 'js assignment',
    fullTime : true ,
    __proto__ : TechnicalSupport
}

Teacher.__proto__ = user


// Modern syntax 

Object.setPrototypeOf(TechnicalSupport,Teacher)

let another = "chai    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

another.trueLength()
"Ram".trueLength()

"krishna".trueLength()

