import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { AUTH_TOKEN } from '../constants';

@Injectable()
export class AddAuthTokenInterceptor implements HttpInterceptor {
  constructor(private storage: LocalStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.storage.exists(AUTH_TOKEN)) {
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.storage.get(AUTH_TOKEN)}`,
        },
      });
      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}
