// question 2 -fibonnaci Number
//Fibonnaci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233....
//F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2) , for n>1
// Input: n = 3 --->>>> Output: 2

// const fib = function (n) {
//   const arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[n];
// };
// const res = fib(5);
// console.log(res);
// const fib1 = function (n) {
//   if (n <= 1) return n;
//   return fib1(n - 1) + fib1(n - 2);
// };
// console.log(fib1(2));
//n = 3 => fib(2) + fib(1)

const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

console.log(fib(3));
