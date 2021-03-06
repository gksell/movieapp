import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { MovieService } from 'src/services/movie.service';
import { Movie } from '../models/movie';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService]
})
export class MoviesComponent implements OnInit {

  title="Film Listesi";
  popularMovies:Movie[]
  movies:Movie[]=[];
  FilteredMovies:Movie[]=[];
  
  filterText:string="";

  loading:boolean=false;
  constructor(private alertify:AlertifyService,
              private movieService:MovieService,
              private activatedRoute:ActivatedRoute  ) { // Alertify Service inject edilir. kopya oluşturulur.
    
    
   }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{

        this.loading=true;
      this.movieService.getMovies(params["categoryId"]).subscribe(data=>{
        this.movies=data;
        this.FilteredMovies=this.movies;
        this.loading=false;
     },error=>console.log(error));
    });
      

  //  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(data=>{
  //    console.log(data);
  //  })
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