function fizzBuzz(number){
    if (typeof number !== "number")
        return ("Not a number");
    
    else if (number > 0){

        if (number%15 === 0)
            return "FIZZBUZZ";

        else if(number%5 === 0)
            return "BUZZ";

        else if (number%3 === 0)
            return "FIZZ";
        
        return number;
    }
    return number;
}

console.log(fizzBuzz('a'));