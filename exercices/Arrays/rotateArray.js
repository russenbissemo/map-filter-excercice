// ques 2 - Rotate Array by k 
// Give an integer array nums, rotate the array to the right by k steps 
// where k is non negative 

function rotateArray(nums, k) {
    let size = nums.length ; 
    if (size > k){
        k = k % size;
    }
const rotated = nums.splice (size-k , size); 
nums.unshift(...rotated)
return nums;
}
// console.log(rotateArray([1,3,5,6,8,9,10,45,67], 4)),=> [67,45,10,9,8,6,5,3,1]=> [9,10,45,67,8,6,5,3,1] => [9,10,45,67,1,3,5,6,8]
//Rotate Array Optimized 
function rotateArrayOptimized(nums, k) {
    let size = nums.length ; 
    if (size > k) {
        k = k % size; 
        console.log(k)
    }
    reverse(nums, 0,nums.length-1);
    reverse(nums, 0,k-1);
    reverse(nums , k, nums.length -1)
    return nums;
}
function reverse(nums , left , right) {
    while (left < right) { //left = 0;  // right = length -1 == 3 
        const temp = nums[left] // temps = 1 // [1,2, 3, 4]
        nums[left++] = nums[right]; //   nums[left++] = nums[right] = nums[0] = 4
        nums[right--] = temp // nums[right--] = temp= nums[3] = 1
    }
}

console.log(rotateArrayOptimized([1,3,5,6,8,9,10,45,67], 4))
//[1,2, 3, 4]
//left = 0; 
// right = length -1 == 3 