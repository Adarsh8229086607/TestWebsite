//If condition matche returns the index number of that value
//otherwise return -1 
let nums = [1, 2, 4, 6, 2, 4, 8, 9, 1, 46, 3 ,6 , 8];
let findIndex = nums.findIndex((num) => num > 10);
console.log(findIndex);