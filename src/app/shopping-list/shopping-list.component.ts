import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../ingredient.model';
import { ShoppingListServiceService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
   private igChangeSub !:Subscription ;
  ingredients !: Ingredient[] ;
  

  constructor(private shoppinglistservice:ShoppingListServiceService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistservice.getShoppingList();
    this.igChangeSub = this.shoppinglistservice.ingredientChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients;

    })
  }
  ngOnDestroy(): void {
      this.igChangeSub.unsubscribe();
  }
  onIngredientAdded(ingredient:Ingredient){
this.ingredients.push(ingredient);
  }
  onEditItem(index:number){
this.shoppinglistservice.startEditing.next(index);
  }
}




