let isAdult =true;
let isCriminal = false;


let isEligibleToVOte = isAdult && !isCriminal;
console.log("Eligigble to Vote : ",isEligibleToVOte)

// Logical Operator with NON boolen values
// Falsy Values : null,0,'',false,NaN,undefined
// Anything not falsy is truthy

console.log(true || 1);
console.log(false || 'Mosh');
console.log(false || 1);