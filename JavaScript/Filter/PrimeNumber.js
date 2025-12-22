const numberList = [-10, -5, -1, 0, 1, 2, 4, 6, 7, 9, 11, 14, 17, 18, 19, 23, 43, 78, 90, 23];

function checkPrime(value)
{
    if(value <= 1)
    {
        return false;
    }
    else if(value >= 2 && value <= 3)
    {
        return true;
    }
    for(let divisor = 2; divisor * divisor <= value; divisor++)
    {
        if(value % divisor === 0)
        {
            return false;
        }
    }
    return true;
}

const primeNumbers = numberList.filter(checkPrime);
console.log(primeNumbers);