function showPrime(limit){
    for(let number=2;number<=limit;number++)
        if(isPrime(number)) console.log(number);
}

function isPrime(num){
    for (let i=2;i<num;i++)
            if(num%i==0)
                return false;
    return true;
    }
    


showPrime(3);