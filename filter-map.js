const arr =["java","c","c++","python","Ruby"]
// const val = arr.forEach( (item)=>{
//     // console.log(item);
//     return item
// })
// console.log(val);  // it gives undefined Beacuse it not return anything that's why we use filter,map


const values =arr.filter((item)=>{
    // console.log(item);
    return item
})

// console.log(values);  // it return all values in arr

// const myNum = [1,2,3,4,5,6]
// const nums = myNum.filter( (item) => item > 3)
// console.log(nums);

// or
// const newNum = []
// myNum.forEach( (item) =>{
//     if(item > 3){
//         newNum.push(item)
//     }
// })
// console.log(newNum);

const books = [
    {
        title : "Book one" , genre : "Fiction" , publish : 1981, edition : 2004 
    },
    {
        title : "Book two" , genre : "Non-Fiction" , publish : 1992, edition : 2008 
    },
    {
        title : "Book three" , genre : "History" , publish : 1999, edition : 2007 
    },
    {
        title : "Book Four" , genre : "Non-Fiction" , publish : 1989, edition : 2010 
    },
    {
        title : "Book Five" , genre : "Science" , publish : 2009, edition : 2014 
    },
    {
        title : "Book six" , genre : "Fiction" , publish : 1979, edition : 2004 
    },
    {
        title : "Book seven" , genre : "History" , publish : 1993, edition : 2008 
    },
]

// const userBooks = books.filter( (bk)=> bk.genre === "History")

// const userBooks = books.filter( (bk)=> {
//     return bk.publish > 1990 && bk.genre === "History"})

// console.log(userBooks);


// map

// const myNum = [1,2,3,4,5,6]
// const newNum = myNum.map((item)=> item  + 10)
// console.log(newNum);

// const myNum = [1,2,3,4,5,6]
// const newNum = myNum.map((item)=> item  * 10)
//                     .map((item)=> item + 1 )
//                     .filter((num)=> num > 40) 
// console.log(newNum);

// Reduce

const myNum = [1,2,3,4]
const newNum = myNum.reduce( function(acc,currVal){
    console.log(`acc : ${acc} and currVal :${currVal} `);
    return acc + currVal
},3)
// const newNum = myNum.reduce((acc,num)=> acc+num,0)
// console.log(newNum);

const shoppingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "java",
        price : 2999
    },
    {
        itemName : "Data Science",
        price : 4999
    },
]

const totalPrice = shoppingCart.reduce((acc,item)=> acc + item.price ,0)
// console.log(totalPrice);