const nums = [3, 5, 6, 4, 5, 6, 46, 7, 8, 5, 6, 7, 5];
const even = nums.filter(num => num % 2 === 0);
const odd = nums.filter(num => num % 2 !== 0);
const unique = nums.filter((value, idx, arr) => arr.indexOf(value) === idx);
console.log(even);
console.log(odd);
console.log(unique);