import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { StartRecipeComponent } from './start-recipe/start-recipe.component';

const routes: Routes = [

  {path:'',redirectTo:'/recipes',pathMatch:'full'},
  {path:'recipes',component:RecipesComponent,children:[{
    path:'' ,component:StartRecipeComponent
  },
  {path:'new' , component:RecipeEditComponent},
  {path:':id' , component:RecipeDetailComponent},
  {path:':id/edit' , component:RecipeEditComponent}
]},
  {path:'shopping-list',component:ShoppingListComponent},
  {path:'auth',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
