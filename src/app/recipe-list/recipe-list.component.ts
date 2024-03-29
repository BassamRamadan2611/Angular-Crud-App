import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeServiceService } from '../recipes.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']

})

  export class RecipeListComponent implements OnInit {
    recipes!:Recipe[];
   @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
    constructor(private recipeservice:RecipeServiceService ,private router:Router,private route:ActivatedRoute) {
  
     }
  
    ngOnInit(): void {
      this.recipeservice.recipesChanged.subscribe((recipes:Recipe[])=>{
  this.recipes =recipes;
      })
      this.recipes=this.recipeservice.getRecipes();
    }
    onRecipeSelected(recipe:Recipe){
  this.recipeWasSelected.emit(recipe);
    }
    onNewRecipe(){
      this.router.navigate(['new'],{relativeTo:this.route})
  
    }
  
    
  }
  