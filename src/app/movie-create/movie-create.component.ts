import { Component, OnInit } from '@angular/core';
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
  constructor(private categoryService:CategoryService,
              private movieService:MovieService,
              private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

  createMovie(title:any,description:any,image:any,categoryId:any){

    const movie ={
      id:0,
      title: title.value,
      description:description.value,
      imageUrl:image.value,
      isPopular:false,
      categoryId:categoryId.value,
      datePublished:new Date().getTime()};

      this.movieService.createMovie(movie).subscribe(data=>
        this.router.navigate(['/movies'])
      );
  };

  

}
