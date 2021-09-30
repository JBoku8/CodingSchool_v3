import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseAuthService } from '../firebase-auth.service';
import { IFirebaseSignUp } from '../shared/firebase-auth.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  formData: IFirebaseSignUp = {
    email: '',
    password: '',
  };
  constructor(private firebaseAuth: FirebaseAuthService) {}

  ngOnInit(): void {
    this.firebaseAuth.currentUser.subscribe((data) => {
      console.log(data);
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.firebaseAuth.signUp(this.formData);
    }
  }
}
