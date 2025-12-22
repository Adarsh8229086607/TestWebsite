// const names = ["amit", "aman", "sumit", "suman", "sahil"];
//const eachNameLength = names.map((name) => name.length);
//console.log(eachNameLength); -->



const myFunc = function getLength(str)
{
    return str.length;
}

const names = ["amit", "aman", "sumit", "suman", "sahil"];
const nameLen = names.map(myFunc);
console.log(nameLen);