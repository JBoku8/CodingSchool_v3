import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(public $authService: AuthService, private $router: Router) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    if (form.valid) {
      await this.$authService.loginAsync(this.formData);

      if (this.$authService.loggedIn) {
        this.$router.navigateByUrl(this.$authService.redirectUrl);
      }
    }
  }
}
