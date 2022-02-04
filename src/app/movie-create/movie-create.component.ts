import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/services/category.service';
import { MovieService } from 'src/services/movie.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers:[CategoryService,MovieService]
})
export class MovieCreateComponent implements OnInit {

  categories:Category[];
  model:any={
    categoryId:""
  };
  constructor(private categoryService:CategoryService,
              private movieService:MovieService,
              private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

  createMovie(){

    

    const movie ={
      id:0,
      title:this.model.title,
      description:this.model.description,
      imageUrl:this.model.imageUrl,
      isPopular:false,
      categoryId:this.model.categoryId,
      datePublished:new Date().getTime()};

      this.movieService.createMovie(movie).subscribe(data=>
        this.router.navigate(['/movies'])
      );
  };

  log(value:any){
    console.log(value);
  }

  

}
