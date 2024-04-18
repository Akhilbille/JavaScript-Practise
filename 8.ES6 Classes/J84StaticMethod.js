class Circle{
    constructor(radius){
        this.radius = radius;
    }
    
    static setDefault(){
        console.log("Setting Default parameters");
    }
}

// To call the static methods we need to use CLass name and not needed to create an object.
Circle.setDefault();