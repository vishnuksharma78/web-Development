// const promiseOne = new Promise(function(resolve,reject){})

// const promiseOne = new Promise((resolve,reject)=>{
//     //Do am async task
//     // DB calls,network , croptography
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()  // To connect with then()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise resolved");
// })

// we can make a promise without storing in a variable 

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2 is complete");
//         resolve()  // To connect with then()
//     },1000)
// }).then(function(){
//     console.log("promise 2 complete");
// })


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(function(){
       resolve({username : "getcodr", Email : "getcodr@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : "getcodr", Email : "getcodr@gmail.com"})
        }else{
            reject('Error : went wrong ')
        }
    },1000)
})

promiseFour.then((user)=>{
   console.log(user);
   return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(e){
    console.log(e);
}).finally(function(){
    console.log("finally promise is fullfiled");
})



// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username : "javascript", password : "123"})
//         }else{
//             reject('Error : js went wrong ')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const reponse = await promiseFive
//         console.log(reponse);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive() 

async function getAllUser(){
  try {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
} 

getAllUser()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((reponse)=>{
    return reponse.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})