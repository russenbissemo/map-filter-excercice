// Ques 4 - Two Sum
// given an array of integers nums and an integer target
// return indices of the two numbers such that they add up to target

// Inout : nums = [2, 7, 11, 15] , target = 9
// Output : [0,1] (Because nums[0] + nums [1] == 9 , we return [0, 1])
// Input: nums = [3, 2 , 4] , target = 6
// OutPut : [1, 2]
// Brute Force Solution
// const twoSum = (nums, target) =>{
//     for (let i = 0 ; i<nums.length ; i++) {
//         for (let j = i+1 ; j< nums.length; j++){
//          if (nums[i] + nums[j] === target ) return [i, j ]
//         }

//     }
// }
// console.log(twoSum([2, 4, 8, 9 , 1] , 12))

const twoSum = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    console.log(n);
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};
console.log(twoSum([2, 4, 8, 9, 1], 12));
