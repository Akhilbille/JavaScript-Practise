const numbers = [1,2,3,4,5,6];

// Spread operator is used to get an array spread it

// Copying array
const numbersCopy = [ ...numbers ]
console.log(numbersCopy);

// Joining arrays
const combine = [ ...numbers, ...numbersCopy]
console.log(combine);

// It supports add individual elements in the middle of its
const combineWithIndividual = [ ...numbers, 'a', ...numbersCopy ,'b']
console.log(combineWithIndividual);
