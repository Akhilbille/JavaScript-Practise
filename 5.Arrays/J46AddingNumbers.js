const numbers = [1,2,5,6] 

// Adding  numbers
// We can add numbers to the array (start,middle,last)



// Start 
// unshift(parametersToInsertAtBegin...)
numbers.unshift(-1,-2,0);
console.log(numbers);



// Middle
// splice(numberOfElementsToAdd,numberOfElementsToDelete,parameterstoAdd...)
numbers.splice(3,0,3,4)
console.log(numbers);

//End
// push(parametersToAdd)
numbers.push(10,11,12,13);
console.log(numbers);




