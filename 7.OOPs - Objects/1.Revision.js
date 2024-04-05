// Creating Object Literals

const movie = {
    title : 'Simhadri',
    rating : 4.5,
    year : 2009,
    cast :{
        hero : 'Jr. NTR',
        heroine : 'Bhumika',
        musicDirector : 'M.M.Keeravani',
        director: 'S.S rajamouli'
    },
    details(){
        console.log(`${this.title} is a commercial movie released in ${this.year}`)
    }
}

movie.details();

// Factory Function

function movieDetails(title,rating,year){
    return {
    title,
    rating,
    year,
    details(){
        console.log(`${this.title} is a commercial movie released in ${this.year}`);
    }
    }

}

const movie1 = movieDetails('simhadri',4.5,2009)
console.log(movie1.details);

// Constructor Function
console.log("========Constructor Function==========")
function MovieDetails(title,rating,year){
    this.title = title;
    this.rating = rating;
    this.year = year;

    this.details = function(){
        console.log(`${this.title} is a commercial movie released in ${this.year}`);
    }
}

const movieDetails2 = new MovieDetails('Simhadri',4.5,2009);
console.log(movieDetails2)