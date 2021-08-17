import { Injectable } from '@angular/core';

import { SignInData, SignInResponse } from './login-form/login-form.data';

interface ServiceHandlers {
  onSuccess: (arg: SignInResponse) => void;
  onError: (arg: Error) => void;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedIn: boolean = false;

  constructor() {}

  login(credentials: SignInData, handlers: ServiceHandlers) {
    // AJAX CALL
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((res: Response) => res.json())
      .then((data: SignInResponse) => {
        // code logic
        handlers.onSuccess(data);
      })
      .catch((error: Error) => {
        // logic
        handlers.onError(error);
      });
  }

  async loginAsync(credentials: SignInData): Promise<SignInResponse | undefined> {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const result: SignInResponse = await response.json();
      return result;
    } catch (error: unknown) {
      return undefined;
    }
  }

  logOut() {
    this.loggedIn = false;
  }
}
