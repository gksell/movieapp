import { Movie } from "./movie";

export class MovieRepository{
    private movies:Movie[];
    constructor(){
        this.movies=[
            {id:1,title:"Film1",description:"title"+"acıklaması",imageUrl:"dlu.jpg",isPopular:true,datePublished:new Date(1955,10,10)},
            {id:1,title:"Film2",description:"title"+"acıklaması",imageUrl:"dlu.jpg",isPopular:false,datePublished:new Date(1950,10,10)},
            {id:1,title:"Film3",description:"title"+"acıklaması",imageUrl:"dlu.jpg",isPopular:true,datePublished:new Date(1985,10,10)},
            {id:1,title:"Film444",description:"title"+"acıklaması",imageUrl:"dlu.jpg",isPopular:false,datePublished:new Date(1935,10,10)},
            {id:1,title:"Fil555",description:"Son"+"acıklaması",imageUrl:"dlu.jpg",isPopular:true,datePublished:new Date(1995,10,10)},
          ];
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