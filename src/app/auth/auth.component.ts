import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})export class AuthComponent implements OnInit {
  isLoginMode=true;
  isLoading=false;
  error=null;

  constructor( private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onSwitch(){
    this.isLoginMode =!this.isLoginMode;
  }
  onSubmit(form:NgForm){
if(!form.valid){
return;
}
const email = form.value.email;
const password = form.value.password;

this.isLoading=true;
if(this.isLoginMode){
  this.authService.login(email,password).subscribe(responseDate=>{
    console.log(responseDate);
  },errorMessage=>{
    console.log(errorMessage);
    this.error = errorMessage;
    this.isLoading =false;
    this.isLoading=false;
    this.router.navigate(['/recipes'])
  })}
  
else{
  this.authService.signup(email,password).subscribe(responseDate=>{
    console.log(responseDate);
    this.isLoading=false;
    this.router.navigate(['/recipes']);
  },errorMessage=>{
    console.log(errorMessage);
    this.error = errorMessage;
    this.isLoading =false;
  })
}


form.reset();

  }


}

