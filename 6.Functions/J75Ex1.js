function sum(...numbers){
    // let result = 0;
    // for(let number of numbers){
    //     if (Array.isArray(number))
    //         return number.reduce((a,c)=>a+c);
    //     result+=number;
    // }
    // return result;
    // Mosh Solution
        if(numbers.length === 1 && Array.isArray(numbers[0]))
            numbers=[...numbers[0]];
        return numbers.reduce((a,c)=>a+c);

}

console.log(sum([1,2,3,4,5,6]));