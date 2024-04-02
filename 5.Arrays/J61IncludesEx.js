

function includes(array,searchElement){
    for(let number of array)
        if(number === searchElement)
            return true;
    return false;
    
}

const array = [1,2,3,4,5,6];
let searchElement = 4;
console.log(includes(array,searchElement));