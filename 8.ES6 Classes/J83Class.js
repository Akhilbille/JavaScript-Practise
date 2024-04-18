class Circle{

    //Constructor
    constructor(radius){
        this.radius = radius;
    }

    //Methods
    draw(){
        console.log(`drawing a Circle with radius : ${this.radius}`);
    }
}

// Creating Objects
const circle1 = new Circle(20);
circle1.draw();
