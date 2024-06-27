
const arr = [1,2,4,6,7,8,8]  // creating an element 
let heros = ["Iron man","caption","hanuman"]
let books = new Array("java","C++","pyhton","DSA") // Another way to declare an array

// console.log(arr.length);
arr[0] = 23
// console.log(arr);
 
arr.push(23)  // to push the values in arr
arr.push(65)
// console.log(arr);

arr.pop()  // to delete last value 
arr.pop()
// console.log(arr);

arr.shift() // to remove a value from start
arr.unshift(45)  // to add a value in arr at start
// console.log(arr);

// console.log(arr.includes(9));  // it checks element is present inarray or not 
// console.log(arr.indexOf(4));  // it return indexOf element
// console.log(arr.indexOf(98)); // if value is not in array it returns -1 

const newArr = arr.join() // join method convert array into string 
// console.log(arr);
// console.log(newArr);
// console.log(typeof(newArr));  // it gives string 

const a = [1,2,4,6,7,8,9]
// console.log(a);
const b = a.slice(1,4)
// console.log(a);  // it takes only array elements and return it
// console.log(b);
const c = a.splice(1,4) // it changes in original array 
// console.log(c);
// console.log(a);

const marvel = ["Iron man","caption","spider-man"]
const dc = ["superman","flash","Batman"]
// marvel.push(dc) // it push array in last(in same array)
// console.log(marvel);

// const allHeros = marvel.concat(dc)  // it concat two arrays and returns a new array
// console.log(allHeros);

// sperade 
// const all_new_heros = [...marvel,...dc]
// console.log(all_new_heros);

// const another_array = [1,2,4,[5,6,7,[11,22],9,[23,45]]]
// const flatArray = another_array.flat(Infinity)  // it combine all sub arrays in one array
// console.log(flatArray);

// console.log(Array.isArray("RamSita"));
// console.log(Array.from("RamSita"));  // it create a array
// console.log(Array.from({name : "krishna"}));  // it gives an empty array (intersting case)
let n1 = 100
let n2 = 200
let n3 = 300
// console.log(Array.of(n1,n2,n3)); // it converts all values into an array 


// we can Access array elements using loops

// arr.forEach(element => {
//     console.log(element)
// });

let codeBooks = new Array("java","C++","pyhton","DSA","javascript","CSS")

// for(let i = 0 ; i<codeBooks.length ;i++){
//     console.log(codeBooks[i]);
// }
// or 

// codeBooks.forEach(element => {
//     console.log(element);
// });