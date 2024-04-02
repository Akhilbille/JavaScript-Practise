function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    let points =  Math.floor((speed-speedLimit)/kmPerPoint);
    return points>12 ? "License Suspended":(points>0?points:'OK');
}

console.log(checkSpeed(70));