function showStars(rows){
    for(let row=1; row<=rows; row++){
        let pattern = '';
        for(let value=1; value<=row; value++){
            pattern +='*'
        console.log(pattern);
        }
        console.log();
    }
}

showStars(10);