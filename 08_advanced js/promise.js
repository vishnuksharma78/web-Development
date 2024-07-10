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


// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//        resolve({username : "getcodr", Email : "getcodr@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username : "getcodr", Email : "getcodr@gmail.com"})
//         }else{
//             reject('Error : went wrong ')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//    console.log(user);
//    return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(e){
//     console.log(e);
// }).finally(function(){
//     console.log("finally promise is fullfiled");
// })



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

// async function getAllUser(){
//   try {
//     const response = await fetch("https://api.github.com/users/hiteshchoudhary")
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// } 

// getAllUser()

// fetch("https://api.github.com/users/hiteshchoudhary")
// .then((reponse)=>{
//     return reponse.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


// fetch("https://something.com").then().catch().finally() ; 

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {

//       resolve("foo");
//     }, 300);
//   });
  
//   myPromise
//     .then((item)=>{
//         console.log("Promise Consumes" , item);
//     })


//    new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Radha Rani");
//         resolve();
//     }, 1000);
//    }).then(function(){
//     console.log("jai shree Krishna");
//    })


let nextPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
       let error = true ;
       if (!error) {
        resolve({username : "vishnu", city : "jaipur"})
       }else{
        reject('Error : something is wrong in next promise')
       }
        
    }, 1000);
})

// nextPromise
// .then((data)=>{
//   console.log(data);
//   return data.username
//  })
//  .then((username)=>{
//     console.log(username);
//  })
//  .catch((error)=>{
//     console.log(error);
//  }).finally(()=> console.log("Finally ")) ;

// or

async function consumenextPromise(){
   try {
    const response = await nextPromise ;
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumenextPromise()

// async function getAllData(){
//     try {
//         const res = await fetch("https://api.github.com/users/hiteshchoudhary") ;
//         const data = await res.json() ;
//         console.log(data);
//     } catch (error) {
//         console.log("E : ", error);
//     }
// }
// getAllData()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((reponse)=>{
    console.log(reponse);
})
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("error 3");
})