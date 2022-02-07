import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
  providers:[CategoryService]
})
export class CategoryCreateComponent implements OnInit {

  constructor(private categoryService:CategoryService,
              private router:Router  ) { }

  ngOnInit(): void {
  }

  createCategory(name:string){
    const category:Category ={
      name:name
    }

    this.categoryService.createCategory(category).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/']);
    })
  }
}
