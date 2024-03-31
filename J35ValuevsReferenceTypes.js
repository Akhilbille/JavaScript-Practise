// Premetive Type
function premitiveType(number){
    number++;
}

let number = 10;
premitiveType(number);//It pass the value as a copy so it wont get impacted.
console.log(number);




// Reference Type
function referenceType(object){
    object.radius = 20;
}
let circle = {
    radius : 10
};

//It passes the address of the object not values so if any changes made in the function then ot impacts the whole object
referenceType(circle)
console.log(circle);