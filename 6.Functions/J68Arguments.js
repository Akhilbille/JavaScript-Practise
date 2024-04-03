function sum(){
    let sum = 0;
    for(let number of arguments){
        sum +=number;
    }
    return sum;

}

console.log(sum(1,2,3,4,5,6));