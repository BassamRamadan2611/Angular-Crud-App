import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeServiceService } from '../recipes.service';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id!:number;
  editMode=false;
  recipeForm!:FormGroup

  constructor( private route:ActivatedRoute ,private rs:RecipeServiceService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id'] !=null;
      this.initForm();

    })
  }

  private initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    let recipeIngredients= new FormArray([]);

    if(this.editMode){
      const recipe = this.rs.getRecipe(this.id)
     recipeName =recipe.name;
     recipeImagePath =recipe.imagePath;
     recipeDescription = recipe.Description;
     if(recipe["ingredients"]){
       for( let ingredient of recipe.ingredients){
         recipeIngredients.push(new FormGroup({

          'name' : new FormControl(ingredient.name,Validators.required),
          'ammount':new FormControl(ingredient.ammount,[Validators.required])
         }))
       }
     }
  
        }

        this.recipeForm = new FormGroup({
          'name':new FormControl(recipeName,Validators.required),
          'imagePath' : new FormControl(recipeImagePath,Validators.required),
          'description' :new FormControl(recipeDescription,Validators.required),
          'ingredients':recipeIngredients
        })
        

  }
  getControls() {  
    return (<FormArray>this.recipeForm.get('ingredients')).controls;  
}
onAddIngredient(){
  (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
    'name': new FormControl(null,Validators.required),
    'ammount' : new FormControl(null,[Validators.required])
  }))
}
  onSubmit(){

    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients'],
    )

    if(this.editMode){
      this.rs.updateRecipe(this.id,newRecipe);
    }else{
      this.rs.addRecipe(newRecipe);
    }
   this.onCancel();

  }
  ondeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
  onCancel(){
this.router.navigate(['../'],{relativeTo:this.route});
  }

}


