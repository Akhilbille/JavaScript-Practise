function countTruthy(array){
    let count = 0;
    for(let item of array){
        if(item)
            count++;
    }
    return count;

}


const array = [1,2,3,4,0,'',null,undefined,NaN,false];
console.log(countTruthy(array));