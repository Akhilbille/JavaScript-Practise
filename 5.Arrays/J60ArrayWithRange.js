function arrayFromRange(min,max){
    let array = [];
    while(min <= max)
        array = array.concat(min++);

    return array;
}

console.log(arrayFromRange(-3,-10));