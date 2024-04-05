function MovieDetails(title,rating,year){
    this.title = title;
    this.rating = rating;
    this.year = year;
    // Local Variables which are only accessible inside the function but not outside the function.
    let cast ={
        hero : 'Jr. NTR',
        heroine : 'Bhumika',
        musicDirector : 'M.M.Keeravani',
        director: 'S.S rajamouli'
    }; 
    this.details = function(){
        console.log(`${this.title} is a commercial movie released in ${this.year}`);

    }
}

