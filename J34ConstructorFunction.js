function CreateCircle(radius){
    this.radius = radius;
    this.draw= function(x,y){
        console.log('Draw',x,y);
    }
    
}

// Create object to the Constructor Function
const circle1 = new CreateCircle(12);
console.log(circle1);
circle1.draw(1,2);
