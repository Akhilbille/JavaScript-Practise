let number = 10;

//Math Object Properties
console.log(Math.PI);
console.log(Math.SQRT2);

// Methods

console.log( number.toString()[0])
console.log( number[0]); //Results undefined because we are unable to use index values to extract numbers so we can convert into String 

let age = '12';
console.log(Number(age)); //Converting a string into a number.
console.log(Math.abs(-100));

console.log(Math.ceil(-5.5));

console.log(Math.floor(-5.5));

console.log(Math.max(1,2,3));

//TO check maximum number of an array
let marks = [1,3,6];
console.log(Math.max( ...marks ));


console.log(Math.min(-100,12,0,2));

console.log(Math.pow(2,2));

console.log(Math.ceil(Math.random()*100));

console.log()
