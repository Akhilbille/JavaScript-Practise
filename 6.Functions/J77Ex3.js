function countOccurances(array, searchElement){
    if(!Array.isArray(array))
        throw new Error('Not an array');
    // MOsh Solution (Both are same )
    const occurances = array.reduce((a,c) =>{
    let occurance = (c=== searchElement)?1:0;
    return a+occurance;
    },0)
    return occurances;
}

const array = [1,2,3,1,2,3];
let searchElement = 2;
try{
    console.log(countOccurances(array,searchElement));
}
catch(e)
{
    console.log(e.message);
}