function interest(principal,rate=3.5,years=2){
    return principal*rate/100*years;
}

console.log(interest(1000));