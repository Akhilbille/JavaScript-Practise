//  To sort array with primitive values.
//sort

const numbers = [4,2,3];
console.log(numbers.sort());

//Reverse array
console.log(numbers.reverse());

// To sort an array with Objects

const courses = [
    {id:1 , name:'Node.js'},
    {id:2, name:'jS'},
    {id:3, name:'mongoDB'},
]

courses.sort((a,b)=>{
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;

})

console.log(courses);