// Inbuilt Loop Methods
const numbers = [ 1, 2 ,3 , 4, 5]

// map 
const newNums1 = numbers.map((item, index , array)=> {
    return item +5

})
// console.log(newNums1)

// filter

const newNums2 = numbers.filter((item, index, array) => {
    return item > 3;
})
// console.log(newNums2)

// reduce 

const sum = numbers.reduce((prev, item) => {
    return prev + item 
}, 0)
// console.log(sum)

// some

const newNums3 = numbers.some((item, index, array) => {
    return item > 3;
})
//  console.log(newNums3)

 // every

const newNums4 = numbers.every((item, index, array) => {
    return item > 3;
})
//  console.log(newNums4)

 // find

 const newNums5 = numbers.find((item, index, array) => {
    return item > 3;
})
  console.log(newNums5)
