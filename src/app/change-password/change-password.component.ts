import { Component, OnInit } from '@angular/core';

import { changepassword } from './../changepassword';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  hide1 = true;
  hide2 = true;
  hide3 = true;
  constructor() {}
  userModel: changepassword = new changepassword('', '', '');

  ngOnInit(): void {}
}
