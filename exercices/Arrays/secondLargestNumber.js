// Ques 1 - Second Larget Number
// Given an Array Arr of size N , print second largest
// distinct element form an array 

const Arr = [10,5,10]
function secondLargestNumber(Arr) {
    const norepeatNumber = (Array.from(new Set(Arr))).sort((a,b) => b-a)
   if (norepeatNumber.length >= 2){
     return norepeatNumber[1]
   } else {
    return -1
   }
}
console.log(secondLargestNumber(Arr))
   
// const middleProcess = Arr.sort((a,b)=> a-b )
// // console.log(middleProcess)
// const secondLargestNumber = middleProcess[middleProcess.length -2]
// console.log(secondLargestNumber)
