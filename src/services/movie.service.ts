import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "src/app/models/movie";


@Injectable()
export class MovieService{

    url="http://localhost:3000/movies";
    
    constructor(private http:HttpClient) { }

    getMovies(categoryId:number):Observable<Movie[]>{
        let newUrl=this.url;
        if(categoryId){
            newUrl += '?categoryId='+ categoryId;
        }
        return this.http.get<Movie[]>(newUrl);
    }

    getMovieById(movieId:number):Observable<Movie>{
        return this.http.get<Movie>(this.url+"/"+movieId);
    }
    createMovie(movie:Movie):Observable<Movie>{
        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':'Token'
            })
        }
        return this.http.post<Movie>(this.url,movie,httpOptions)
    }
}