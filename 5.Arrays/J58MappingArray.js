const numbers = [1,2,3,4,5,6,7,8,9,10];
let  addOne = numbers.map( n => n+1);
console.log(addOne);

// To convert into an object
// Map and Filter objects combinations are used to filter and map the data
let obj = numbers
    .map( n => ({value : n}))
    .filter( obj => obj.value > 5)
    .map( n => n.value + 5 );

console.log(obj);