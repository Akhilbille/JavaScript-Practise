function maxElement(array){
    if (array.length ===0) return undefined;
    let max = array.reduce((a,c) => (a>c)?a:c);
    return max;
}

const array = [1,2,3,4,5,6,7,10];
console.log(maxElement(array));

