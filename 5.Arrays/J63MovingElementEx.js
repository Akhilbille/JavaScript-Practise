function move(array, index, offset){
    let position = index+offset;
    if(position >= array.length || position < 0)
    console.error("Invalid Offset")

    let movedArray = [ ...numbers ];    
    let element = movedArray.splice(index,1);
    movedArray.splice(position,0,element[0]);
    console.log(movedArray);
}

numbers=[1,2,3,4,5,6];

console.log(numbers);
move(numbers,5,-1);