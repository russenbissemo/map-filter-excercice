// Spread Operator
const nums = [ 1, 2, 3 ];
const nums2 =  [4, 5, 6, 7]
let arr = ["apple", "banana", "cherry"]

const finalNums = [ ...nums , ...nums2]

// console.log(finalNums)
// Rest Operator 
function sum(...numbers){
    return numbers; 
}
// console.log(sum(nums, nums2));

//Concat 
const newArray = nums.concat(nums2)
// console.log(newArray)

// Slice 
const newArr = arr.slice(0, 2);
// console.log(newArr)

// Splice 
 arr.splice(0, 2, "orange")
// console.log(arr)

// fill 
const dummy = [ 2, 5, 1, 6]
dummy.fill(2, 2);
// console.log(dummy);

// findIndex 
const index = nums.findIndex((item) => item === 2)
console.log(index);

// flat 
const flatEx = [1, [2,3], [[4, 5], 6]];
const flatArr= flatEx.flat(2);
// console.log(flatArr);

// reverse 
console.log(nums)
nums.reverse()
// console.log(nums)

// Sort 
const unsorted = [5,2,10,7,3,1];
unsorted.sort((a,b)=> a-b);
console.log(unsorted)


