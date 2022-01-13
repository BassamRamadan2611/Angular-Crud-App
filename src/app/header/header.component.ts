import { Component, OnInit,EventEmitter,Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { DataStorageService } from '../data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy {
  @Output() featureSelected = new EventEmitter<string>();


 private userSub! : Subscription;
 isAuthentication =false;

   
  constructor(private dataStorage:DataStorageService ,private authService:AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user=>{
      this.isAuthentication = !!user;
      console.log(!user);
      console.log(!!user);
    })
  }
  ngOnDestroy(): void {
      this.userSub.unsubscribe();
  }
  onSaveData(){
    this.dataStorage.storeRecipes();

  }
  onFetchData(){
    this.dataStorage.fetchRecipes();
  }

  onSelect(feature:string){
    this.featureSelected.emit(feature);}
    onLogout(){
  this.authService.logout();
    }
    

}


