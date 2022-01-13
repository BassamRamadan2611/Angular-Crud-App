import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { RecipeServiceService } from './recipes.service';
import { Recipe } from './recipe.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient,private recipeService:RecipeServiceService) { }

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();


    return this.http.put("https://ng-recipe-book-af18e-default-rtdb.firebaseio.com/recipes.json",recipes).subscribe((response)=>{
      console.log(response);
    })

  }
  fetchRecipes(){
    this.http.get<Recipe[]>("https://ng-recipe-book-af18e-default-rtdb.firebaseio.com/recipes.json").pipe(map(recipes=>{
      return recipes.map(recipe=>{
        return {...recipe,ingredients:recipe.ingredients? recipe.ingredients:[]}
      })
    })).subscribe(recipes=>{
this.recipeService.setRecipes(recipes);
    })
  }
}
