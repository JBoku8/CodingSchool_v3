import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IFirebaseSignIn, IFirebaseSignUp } from './shared/firebase-auth.interface';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  currentUser = new Observable<any>();
  hasError: string | null = null;
  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.currentUser = this.afAuth.authState;
  }

  signUp(data: IFirebaseSignUp) {
    this.afAuth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((newUser) => {
        this.router.navigate(['/counter']);
      })
      .catch((error) => {
        console.group('[FirebaseAuthService@signUp]');
        console.warn(error);
        console.groupEnd();
        this.hasError = error;
      });
  }

  signIn(data: IFirebaseSignIn) {
    this.afAuth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        this.router.navigate(['/counter']);
      })
      .catch((error) => {
        console.group('[FirebaseAuthService@signIn]');
        console.warn(error);
        console.groupEnd();
        this.hasError = error;
      });
  }

  signOut() {
    this.afAuth.signOut();
    this.router.navigate(['/']);
  }
}
