// Ques 3 - Remove Duplicates from Sorted Array
// Given an integrer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
//only once; The relative order of the elements should be kept
// the same . then return the number of unique elements in nums

// Input : [1, 1, 2]   --->>>> Output : 2 , [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4]   --->>>> Output : 5 , [0,1,3,3,4,_,_,_,_]

function removeDuplicate(arr) {
  const norepeatNumber = Array.from(new Set(arr));

  return norepeatNumber.length;
}
console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

function removeDuplicates(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
}
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
