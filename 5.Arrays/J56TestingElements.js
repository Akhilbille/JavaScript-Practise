// To test all elements 
// every()
const numbers = [1,2,3,-2,0,1,3]
let allPositive = numbers.every(n => n>0);
console.log(allPositive);

const numbers1 = [1,2,3,-2,0,1,3]
let atleastOnePositive = numbers1.some(n => n>0);
console.log(atleastOnePositive);