// javascript Exection Context 
// 1. Global Exection Context -> it execute at first and stors reference in this 
// 2. Function/Functional Exection Context
// 3. Eval Exection Context

// Exectioon Complete in 2 Phase
// 1. Memory Creation Phase
// 2. Execuation Phase
let val = 10 
let val2 = 5 
function addNum(num1 ,num2){
    let total = num1 + num2
    return total
 }
 let res1 = addNum(val,val2)
 let res2 = addNum(5,2)
 
 // Execution phase
 // 1. Global Exection Context -> it execute at first and stors reference in this 
 // 2 Memory phase(Memory Creation Phase)
//  val -> undefined
//  val2 -> undefined
//  addNum -> defination
//  res1 -> undefined
//  res2 -> undefined

// 3.Execuation Phase
// val = 10
// val2 = 5

// for res1  it makes one execution context
// new-variable enviroment and execution thread
// 1.Memory Phase
// val -> undefined
// val2 -> undefined
// total -> undefined

// 2. Execuation Phase
// num1 = 10
// num2 = 5
// total = 15  it returns in global execution context
// After their work it delete

// and same for res2
// new-variable enviroment and execution thread
// 1.Memory Phase
// num1 ->undefined
// num2 -> undefined
// total -> undefined

// 2. Execuation Phase
// num1 = 10
// num2 = 5
// total = 15 

// call Stack  -> LIFO
// it stores first  Global Execution Context

function  one() {
    console.log("one")
    two()
}
function  two() {
    console.log("two")
    three()
}
function  three() {
    console.log("three")
}
one()
two()
three()

