class Shape{
    move(){
        console.log("Move");
    }
}

class Circle extends Shape{
    move(){
        super.move();
        console.log("Move Circle");
    }
}    

const c = new Circle();
c.move();

