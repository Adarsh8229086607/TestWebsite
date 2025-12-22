const nums = [3, 5, 6, 8, 9, 1, 2, 7, 10, 11];

function oddEven(num)
{
    if (num % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

const result = nums.map((num) => {
    return oddEven(num);
});

console.log(res);