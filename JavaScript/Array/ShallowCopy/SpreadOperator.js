//Marging two arrays
/*
let frontend = ["HTML", "CSS"];
let backend = ["Java", "Node"];
let fullStack = [...frontend, ...backend];
console.log(fullStack);
*/


function Sum(a, b, c)
{
    return a+b+c;
}

let numbers = [10, 20, 30];
console.log(Sum(...numbers));