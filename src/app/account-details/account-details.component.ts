import { Component, OnInit } from '@angular/core';
import { accountdetails } from './../account-details';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  constructor() {}
  userModel: accountdetails = new accountdetails(
    'Mohamed',
    'Rashed',
    'mohamedtolleba2016@gmail.com',
    ''
  );

  ngOnInit(): void {}
  saveUserDeetails(form: any) {
    if (form.valid) {
      console.log(' button clicked ');
      console.log(form.controls.firstname.value);
      console.log(form.controls.lastname.value);
      console.log(form.controls.email.value);
    }
  }
}
