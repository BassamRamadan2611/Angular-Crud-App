import { Component, OnInit , OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../ingredient.model';
import { ShoppingListServiceService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{


  @ViewChild('f') "slForm":NgForm;
 subscription!:Subscription;
 editMode=false;
 editedItemIndex!:number;
 editedItem!:Ingredient;


  constructor( private sl:ShoppingListServiceService) { }

  ngOnInit(): void {
    this.subscription = this.sl.startEditing.subscribe((index:number)=>{
      this.editedItemIndex=index;
      this.editMode=true;
      this.editedItem = this.sl.getIngredient(index);
      this.slForm.setValue({
        name:this.editedItem.name,
        ammount:this.editedItem.ammount

      })


    })

  }
  onSubmit(f:NgForm){
 const value=f.value;
    const newIngredient = new Ingredient(value.name,value.ammount);
    if(this.editMode){
      this.sl.updateIngredient(this.editedItemIndex,newIngredient);
    } 
    else{
      this.sl.addIngredient(newIngredient);
    }
this.editMode=false;
f.reset(); 

  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
this.sl.delateIngredient(this.editedItemIndex);
this.onClear();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
