const vals = [3, 4, 6, 1, 2 , 7, 8, 10, 11, 7];
let maxValue = vals.reduce((prev, curr) => (prev > curr ? prev : curr));
console.log(maxValue);