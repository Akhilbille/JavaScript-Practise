function Circle(radius){
    this.radius = radius;
    let defaultLocation = {x:0,y:0};
    this.draw = function(){
        console.log("Draw");
    };
    Object.defineProperty(this,'defaultLocation',{
        get:function(){
            return defaultLocation;
        },
        set:function(value){
            if( !value.x || !value.y)
                throw new Error("Invalid Location")
            defaultLocation = value;

        }
    });
}

try{
    const circle1 = new Circle(1);
circle1.defaultLocation = {x:12,y:13};
console.log(circle1.defaultLocation);
}

catch(e){
    console.log(e.message);
}
