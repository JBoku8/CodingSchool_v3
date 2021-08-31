import { Injectable } from '@angular/core';
import { LocalStorageService } from '../common/local-storage.service';
import { AUTH_TOKEN } from '../constants';

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

  constructor(private storageService: LocalStorageService) {
    this.loggedIn = this.storageService.exists(AUTH_TOKEN);
  }

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
      this.storageService.set(AUTH_TOKEN, result.token);
      this.loggedIn = true;
      return result;
    } catch (error: unknown) {
      return undefined;
    }
  }

  logOut() {
    this.loggedIn = false;
    this.storageService.remove(AUTH_TOKEN);
  }
}
