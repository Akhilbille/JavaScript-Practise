const numbers = [1,3,4,6,5,9,7];


//Beginning 
//shift()
let number = numbers.shift();
console.log(number);
console.log(numbers);

// Middle
//splice(numberOfElements,startingIndex)
numbers.splice(2,2);
console.log(numbers);

// End
// pop()
numbers.pop();
console.log(numbers);

