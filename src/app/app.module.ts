import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { StartRecipeComponent } from './start-recipe/start-recipe.component';
import { RecipeServiceService } from './recipes.service';
import { ShoppingListServiceService } from './shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    RecipeEditComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    StartRecipeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ RecipeServiceService,ShoppingListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
