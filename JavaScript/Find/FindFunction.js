/* -- Returns 46 because only value matches the condition
let nums = [1, 2, 4, 6, 2, 4, 8, 9, 1, 46, 3 ,6 , 8];
let foundValue = nums.find((num) => num > 10);
console.log(foundValue);
*/

//Undefined
let nums = [1, 2, 4, 6, 2, 4, 8, 9, 1, 46, 3 ,6 , 8];
let foundValue = nums.find((num) => num == 10);
console.log(foundValue);