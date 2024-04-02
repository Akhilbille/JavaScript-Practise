function createCircle(radius){
    return {
        radius,
        draw(){
            console.log("drawing a circle");
        }
    }
}

// Factory function produces objects
//Creating an object to the factory function
const circle1 = createCircle(2);

//Accessing properties of an object
console.log(circle1.radius); 
circle1.draw();
