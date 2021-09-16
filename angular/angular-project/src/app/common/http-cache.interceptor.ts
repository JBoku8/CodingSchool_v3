import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpCacheService } from './http-cache.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {
  constructor(private httpCache: HttpCacheService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    /**
     * ! HTTP VERBS
     * * GET METHOD - Cached
     * * POST,PUT,PATCH,DELETE - NO Cache
     */
    if (request.method !== 'GET') {
      console.log('INVALIDATING CACHE');
      this.httpCache.invalidateCache();
      return next.handle(request);
    }

    const cachedResponse: HttpResponse<any> | undefined = this.httpCache.get(
      request.url
    );

    if (cachedResponse) {
      console.log('CACHED RESPONSE url', request.url);
      return of(cachedResponse);
    }

    return next.handle(request).pipe(
      tap((ev) => {
        if (ev instanceof HttpResponse) {
          console.log('CACHING', request.url);
          this.httpCache.put(request.url, ev);
        }
      })
    );
  }
}
