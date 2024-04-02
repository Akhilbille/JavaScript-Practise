const numbers = [1,2,3,4,5,6];

//Iterating an array
for(let number of numbers)
    console.log(number);


// Iterating an array using forEach
numbers.forEach(i=> console.log(i))

// Using for each we can have access to its index values also
numbers.forEach((number,index) => console.log(index,number))