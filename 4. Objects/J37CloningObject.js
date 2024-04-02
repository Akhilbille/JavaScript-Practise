const person={
    name:'Akhil',
    age:23,
    talk(){
        console.log("Hello World");
    }
}

// Creating a function in runtime
person.sayHello = function(){
    console.log("Hello")
};

person.sayHello();

// Now to clone an object from one object to other we have multiple ways.
// Type:1 by iterating an object and assigning all the keys to the new Object.
const newPerson = {};
for(let keys in person)
    newPerson[keys] = person[keys];

newPerson.sayHello();//Now we are able to access all the properties and method.

//Type2: To create an object using assign method Object
const newPerson2 = Object.assign({},person);
console.log(newPerson2);

// Type3: Simple way is to use Spread Operator
//When we use spread operator it just internally brings all the code and places in between the brackets
const newPerson3 = { ...person };

//THis is how it does : const newPerson3 =  { name:'Akhil',    
                                                    //age:23,     
                                                    //talk(){        
                                                    // console.log("Hello World");
                                                    //    } }

//This spread operator even works for the arrays
let colors = ['red' , 'green', 'yellow'];
let newColors = [ ...colors ];
console.log(colors);


