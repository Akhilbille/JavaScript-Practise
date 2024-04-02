let person = {
    name : 'Akhil',
    age : 23,
    phone : 2035071959

}

// We can use for...in since it can pull out keys of an object 
for(let key in person){
    console.log(key, person[key])
}

console.log("==========================")
// But where as for...of cannot access the keys directly so use Object properties
for(let key of Object.keys(person)){
    console.log(key, person[key]);
}

console.log("==========================")
//In the same way there is an another method which lists out key and value as a pair
for(let key of Object.entries(person)){
    console.log(key);// We can use there index values to access there data from a list ['key', 'value']
}


//To check the existance of a key we can use 'in' keyword
// if('name' in person)
//     console.log("YES");
console.log('name' in person)// return boolean value by checking there presence in an object