// function 

// function addTwoNum(num1 , num2){  // defination
//     let result =  num1 + num2
//     console.log(result)
// }

// addTwoNum(5,3)

// function addTwoNum(num1 , num2){
//     let result = num1 + num2
//     return result
// }

function addTwoNum(num1 , num2){  // Best way
    return num1 + num2
}

// let res = addTwoNum(2,4)
// console.log(res);

// function loginUser(username){
//     return `${username} just logged in`
// }
// let res = loginUser("Raju Bhai")
// console.log(res);
// console.log(loginUser("kamal"));

// function loginUser(username){
//     if(username === undefined){  // (!username) -> same
//         console.log("please enter user");
//         return
//     }
//     return `${username} just logged in`
// }
// let res = loginUser("Raju Bhai")
// console.log(res);
// console.log(loginUser());

// default value in parameters

// function loginUser(username ="user"){
//     if(username === undefined){  // (!username) -> same
//         console.log("please enter user");
//         return
//     }
//     return `${username} just logged in`
// }
// let res = loginUser("Raju Bhai")
// console.log(res);
// console.log(loginUser());

// console.log(Number.isInteger(2));   // true
// console.log(Number.isInteger("2")); // false
// console.log(Number.isInteger("a")); // false


// Rest Operator
function calculateCartPrice(...arr){
    let totalPrice = 0 ;
    arr.forEach(p => {
        totalPrice += p ;
    });
    return totalPrice
}

// console.log(calculateCartPrice(100,200,300));
// console.log(calculateCartPrice(10,2130,343));


const user = {
    usarname : "shiv sharma",
    coursePrice : 999
}

// Normal function
// function handleObjects(getObject){
//     console.log(getObject.usarname , getObject.coursePrice);  // typed checking properties
// }

// variable function
// const handleObjects = function(getObject){
//     console.log(getObject.usarname , getObject.coursePrice);
// }

// Arrow Function
const handleObjects = (getObject)=>{
    console.log(getObject.usarname , getObject.coursePrice);
}
// handleObjects(user)
// handleObjects({usarname : "Raju",coursePrice : 399})  // we can also pass like that

// more examples on Arrow Function
const addTowNumber = (num1,num2)=>{ return num1+num2} // or
// const addTowNumber = (num1,num2)=> num1+num2    // or
// const addTowNumber = (num1,num2)=> (num1+num2)
// console.log(addTowNumber(34,56));

// const returObj = ()=> {usarname : "shiv"} ; // it can't work
const returObj = ()=>({usarname : "shiv"}) ; // wrap it in br\aces
console.log(returObj());

// Arrays in Function
const myArr = [100,300,405,234]
// const handleArray = (getArray)=> {return getArray[0]}  // or
const handleArray = (getArray)=> getArray[0]
// console.log(handleArray(myArr));

