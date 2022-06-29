import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Create } from './test';



@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private authService:AuthService) { }
  userModel:Create=new Create('' ,'','','','');
  ngOnInit(): void {
  }


  onSubmit(){

    console.log(this.userModel);

  }
  Register(form : any){
    if( form.valid){
       const userInfo = {
          firstName: form.controls.firstName.value,
          lastName: form.controls.lastName.value,
          email: form.controls.email.value,
          password: form.controls.password.value,
          phone: form.controls.txtPhone.value,
        }
      this.authService.register(form.controls.email.value, form.controls.password.value, userInfo)
  }
  }

}
