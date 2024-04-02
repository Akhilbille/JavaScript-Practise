const first = [1,2,3,4,5,6];
const second = [7,8,9];
console.log( typeof second);

// Combining two Arrays: These are primitive values so after copying premitive values 
//Concat
const combined = first.concat(second);
console.log( combined);

// slice
console.log(combined.slice(2,4));


// But when we copy Object its reference will be shared if the data get modified in any one of the place it impacts both objects

const person = [{ name:'Akhil',age:23}];
const person1 = person.concat(second);
person[0].age=25;
console.log(person1);
console.log(person);
