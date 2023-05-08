let person ={
    name:"rosbain",
    age:34
}
let arr = ["apple", "banana", "cherry", person]
// console.log(arr[3]. name);
// console.log(arr.length);

//Add and Remove Elements 
arr.push("orange");
// console.log(arr)
// Remove From ENd of the Array
arr.pop();
// console.log(arr)
//Add to Top of the Array 
arr.unshift("orange");
// console.log(arr)
// Remove From ENd of the Array
arr.shift();
// console.log(arr)

// Looping an Array 
for (let i = 0 ; i <arr.length ; i++) {
    // console.log(arr[i]);  
}
let i = 1 ; 
while (i < arr.length) {
    console.log(arr[i]);
    
    i++;
}
