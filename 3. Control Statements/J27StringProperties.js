function showProperties(obj){
    for (key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    
}

const movie={
    movie : 'a',
    releaseYear : 2022,
    rating : 4,
    director : 'b'


}
showProperties(movie);