function showNumbers(limit){
    for (let i=0; i<=limit; i++){
        console.log(i%2===0?(i+" Even"):(i+" ODD"));
    }
}
showNumbers(10);
