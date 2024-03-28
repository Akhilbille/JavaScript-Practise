//Functions : Set of statements that performs a specific task, it executes when some call the function explixitly and with out calling the function it never executes.

//Syntax
//Function Defination with no parameters
function greet(){
    console.log("Hello World");
}
greet(); //Function Call

//Function with the parameters
function greetPerson(firstName,lastName){ //Accepting parameters
    console.log("Hello Mr/Mrs "+firstName);
}

greetPerson("Deepthi", "Bille")//Passing the arguments
greetPerson("Akhil Bille")//Passing only one argument so firstName:Akhil Bille and lastName: undefined.
