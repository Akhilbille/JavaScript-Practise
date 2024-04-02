const movies = [
    {title : 'a', year : 2018, rating: 4.5},
    {title : 'b', year : 2018, rating: 4.7},
    {title : 'c', year : 2018, rating: 3},
    {title : 'd', year : 2017, rating: 4.5},
]


let result = movies
    .filter(a => a.rating>4 && a.year===2018)
    .sort( (a,b) => {
        if (a.rating < b.rating) return 1;
        if (a.rating > b.rating) return -1;
        return 0;
    })
    .map(a => a.title);
console.log(result);

// Mosh Solution
// let result = movies
//     .filter(a => a.rating>4 && a.year===2018)
//     .sort((a,b) => (a.rating - b.rating))
//     .reverse()
//     .map(a =>  a.title);


