import { Movie } from "./movie";

export class MovieRepository{
    private movies:Movie[];
    constructor(){
        this.movies=[];
    }

    getMovies():Movie[]{
        return this.movies;
    }
    getMoviesById(id:number):Movie{
        return this.movies.find(i=>i.id==id);
    }
    getPopularMovies(){
        return this.movies.filter(i=>i.isPopular==true)
    }
}