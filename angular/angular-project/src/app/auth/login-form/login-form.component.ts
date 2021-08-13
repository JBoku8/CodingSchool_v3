import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SignInResponse, SignInData } from './login-form.data';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  formData: SignInData = {
    password: '',
    email: '',
    rememberMe: false,
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      // AJAX CALL
      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      })
        .then((res: Response) => res.json())
        .then((data: SignInResponse) => {
          console.log(data.token);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }
}
