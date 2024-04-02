let numbers = [1,2,3,4,5];

// method1
numbers = [];
console.log(numbers);


numbers = [1,2,3,4,5];
//method2(Best one)
numbers.length = 0;
console.log(numbers);

// method3 (Splice)
numbers = [1,2,3,4,5];
numbers.splice(0,numbers.length)
console.log(numbers);

//method4
numbers = [1,2,3,4,5];
while(numbers.length>0)
numbers.pop();
console.log(numbers);






