let numbers = [1,23,4,5,6,45,6,8];

// Finding Elements : Premitive values (left to right)
// indexOf()
console.log(numbers.indexOf(23));
console.log(numbers.indexOf(24));

// Finding elements : right to left
// lastIndexOf()
console.log(numbers.lastIndexOf(6)); //Search from right to left


//To check wheather a element is present or not
// includes()
console.log(numbers.includes(23));

// Finding elements : Objects
const persons =[
    {name :'Akhil', age:23 },
    {name :'Akhil', age:24 },
    {name : 'vinay', age: 15}
]

//Return the object 
let person = persons.find(function(person){
    return person.name === 'Akhil'
})
console.log(person)


//Return the Index of matched object
let personIndex = persons.findIndex(function(person){
    return person.name === 'Akhil'
})

console.log(personIndex)