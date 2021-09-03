import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NEWS_API_URL } from 'src/config';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(NEWS_API_URL)) {
      const clonedReq: HttpRequest<any> = request.clone({
        setHeaders: {
          'X-Api-Key': '8586fc0f4c154e46a7fa9bbd4bb2b54f',
        },
      });
      return next.handle(clonedReq);
    }
    return next.handle(request);
  }
}
