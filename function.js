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


