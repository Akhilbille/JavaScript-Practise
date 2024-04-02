function countOccurances(array, searchElement){
    const occurances = array.reduce((a,c) =>{
        if(c === searchElement)
            return a+1;
        return a+0;
    },0)
    return occurances;

    // MOsh Solution (Both are same )
    // const occurances = array.reduce((a,c) =>{
    // let occurance = (c=== searchElement)?1:0
    // return a+occurance
    // },0)
}

const array = [1,2,3,4,5,6,7,12,1,2,1];
let searchElement = 2;
console.log(countOccurances(array,searchElement));