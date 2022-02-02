import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/services/alertify.service';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title="Film Listesi";
  popularMovies:Movie[]
  movies:Movie[];
  FilteredMovies:Movie[];
  movieRepository:MovieRepository;
  filterText:string="";

  constructor(private alertify:AlertifyService) { // Alertify Service inject edilir. kopya oluşturulur.
    this.movieRepository= new MovieRepository();
    this.movies=this.movieRepository.getMovies();
    this.popularMovies=this.movieRepository.getPopularMovies();
    this.FilteredMovies=this.movies;
   }

  ngOnInit(): void {
  }
  onInputChange(){
     this.FilteredMovies = this.filterText?
     this.movies.filter(m=>m.title.toLowerCase().indexOf(this.filterText)!==-1
     || m.description.toLowerCase().indexOf(this.filterText)!==-1
     ):this.movies;
  }
  addToList($event:any,movie: Movie){
    if($event.target.classList.contains('btn-primary')){
      $event.target.innerText="Listeden Çıkart";
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

     this.alertify.success(movie.title+'listene eklendi');
    }
    else{
      $event.target.innerText="Listeye Ekle";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

    this.alertify.error(movie.title+'listeden çıkarıldı.')
  }
 }
}