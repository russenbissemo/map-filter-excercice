//Question1 -Palindrome Number
// An integer is a palindrome when it reafs the same forward and backward

//Input: x = 121 ----->>>> Output:true
//Input: x = 10  ---->>><  Output:false
const isPalindrome = function (x) {
  return x < 0 ? false :x === +x.toString().split("").reverse().join("");
};
const res = isPalindrome(222);
console.log(res);
