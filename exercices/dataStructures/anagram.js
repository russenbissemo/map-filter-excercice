// ques 3 -Valid Anagram
// An angram is a word or a phrase formed by rearranging the letters of
// a different word or phrase , using all the original letters exactly once

//Input: (s ="anagram") , (t ="nagram") ; ---->>>>Output : true;
// Input: (s = "rat"), (t="car"); --->>>> Output: false

// const isAnagram1 = function (s, t) {
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");

//   return s === t;
// };

// isAnagram1();
// console.log(isAnagram1(s, t));

// anagram  => ["a",........]
// nagram   => xxxxx

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    // take the first character of
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};
console.log(isAnagram("anagram", "nagaram"));

//rat /tar
// {
//    r:1,
//    a:2,
//    t:1
// }
// {
//     t:1,
//     a:2,
//     r:1
//  }
