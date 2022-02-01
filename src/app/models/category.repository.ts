import { Category } from "./category";

export class CategoryRepository{
    private categories:Category[];
    constructor(){
        this.categories=[{id:1,name:"Korku"},
        {id:2,name:"Macera"},
        {id:3,name:"Bilim Kurgu"},
        {id:4,name:"Spor"},
        {id:5,name:"Dram"},
        {id:6,name:"Romantik"},
      ]
    }
    getCategories():Category[]{
        return this.categories;
    }
}