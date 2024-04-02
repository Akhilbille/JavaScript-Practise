function calculateGrade(marks){
    let average = calculateAverage(marks);

    if (average<60) return 'F'
    else if(average < 70) return 'D'
    else if(average < 80) return 'C'
    else if(average < 90) return 'B'
    else return 'A'

}

function calculateAverage(array){
    let sum = 0;

    for(let value of array){
        sum+=value;
    }

    let average = sum/array.length;
    return average;

}

let marks = [80,80,50]
console.log(calculateGrade(marks));
