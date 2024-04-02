function except(array,excluded){
    let excludedArray = [];
    for(let number of array){
        if(!(excluded.includes(number)))
            excludedArray.push(number)
    }
    return excludedArray;

}

const array=[1,23,4,56,8,49];
console.log(except(array,[1,49]));