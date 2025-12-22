// Detailed example of reduce function -Using default initial value
const vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum = vals.reduce((previous, current, idx, arr) => {
    console.log(`The Value of previous is: ${previous} and current is: ${current} and the index number is ${idx} and the length of the array is: ${vals.length}`);

    return previous + current;
}, 100);
console.log(`The final output is: ${sum}`);