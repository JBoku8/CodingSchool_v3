import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { SignInData } from './login-form.data';

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

  constructor(public $authService: AuthService) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    if (form.valid) {
      // this.$authService.login(this.formData, {
      //   onError: (error: Error) => {
      //     console.log('ON ERROR', error);
      //   },
      //   onSuccess: (result: SignInResponse) => {
      //     console.log('ON SUCCESS', result);
      //   },
      // });

      // const result =
      await this.$authService.loginAsync(this.formData);
      // this.$authService.loggedIn = !!result?.token;

      // this.formData = {
      //   password: '',
      //   rememberMe: false,
      //   email: '',
      // };
    }
  }
}
