import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {
  ingredientChanged = new Subject<Ingredient[]>();
  startEditing =new Subject<number>();
 private ingredients : Ingredient[] =[
    new Ingredient('Apple',5),
    new Ingredient('Tomates',10)
    
  
  ];

  getShoppingList(){
return this.ingredients.slice();
  }


  constructor() { }
  getIngredient(index:number){
    return this.ingredients[index];
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice())

  }
  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice())

  }
  updateIngredient(index:number , newIngredient:Ingredient){
    this.ingredients[index] =newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());

  }
  delateIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientChanged.next(this.ingredients.slice());

  }
}
