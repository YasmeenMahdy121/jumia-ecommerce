import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { User } from './user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private authService:AuthService) { }
  userModel:User=new User('' ,'');
  ngOnInit(): void {



  }


  onSubmit(){

    console.log(this.userModel);

  }
  login(form : any){
    if( form.valid){
      this.authService.login(form.controls.email.value, form.controls.password.value)
  }
  }



  }


