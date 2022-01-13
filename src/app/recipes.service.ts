import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { Ingredient } from './ingredient.model';
import { ShoppingListServiceService } from './shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export  class RecipeServiceService {
  constructor( private sl:ShoppingListServiceService) { }
  recipesChanged = new Subject<Recipe[]>();
  recipes:Recipe[]=[
    new Recipe ('A Test Recipe','this is simply a test','https://tse2.mm.bing.net/th?id=OIP.5Z0QkDaaSXoG14U_sDtGSgHaD3&pid=Api&P=0&w=312&h=164',[
      new Ingredient('Meat',1),
      new Ingredient('French Fries',20)
    ]),
 
    new Recipe ('Tasty Schnitzel','A Super- Tasty Schnitzel ,just awesome','https://tse4.mm.bing.net/th?id=OIP.q-pLWKKdbqFt6cm4ma15pAHaHa&pid=Api&P=0&w=300&h=300h',[
      new Ingredient('Buns',2),
      new Ingredient('Meat',1)
    ]),
    new Recipe ('Big  Fat Burger',' what else you need to say ?','https://rs-menus-api.roocdn.com/images/2a38258c-4f36-4e55-86cc-0446cff91e73/image.jpeg?width=1200&height=630&auto=webp&format=jpg&fit=crop&v=',[
      new Ingredient('Fench Fries',20),
      new Ingredient('Buns',2)
    ]),


  ];
getRecipes(){
  return this.recipes.slice();
}
setRecipes(recipes:Recipe[]){
  this.recipes=recipes;
  this.recipesChanged.next(this.recipes.slice());
}

getRecipe(index:number){
  return this.recipes.slice()[index];
}
addIngredientToShoppingList(ingredients:Ingredient[]){
  this.sl.addIngredients(ingredients)
}
addRecipe(recipe:Recipe){
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
  
}
updateRecipe(index:number,newRecipe:Recipe){
this.recipes[index] =newRecipe;
this.recipesChanged.next(this.recipes.slice());
}
deleteRecipe(index:number){
  this.recipes.splice(index,1)
  this.recipesChanged.next(this.recipes.slice());

}

}
