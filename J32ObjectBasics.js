
// Object is used to group relatable variables and functions in one place

const circle = {
    radius : 1,
    location : {
        x:1,
        y:2
    }
};
console.log(circle)

// Trying to access object inside an object
let location ='location';
let obj =circle[location];
let x = 'x';
console.log(circle['location']['y']); //Accssing object inside an object using brackets method
console.log(circle.location.x); //Accessing object inside an object using dot notation

// Creating a new property in the runtime
circle.radius1 = 2;
console.log('Radius1',circle.radius1);


// Delete a property in the run time
console.log(circle);
delete circle.radius1;

// Logging circle object after making all updates
console.log(circle);
