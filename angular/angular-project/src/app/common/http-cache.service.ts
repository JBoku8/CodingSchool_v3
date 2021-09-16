import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpCacheService {
  private requests: Record<string, any> = {};

  put(url: string, response: HttpResponse<any>): void {
    this.requests[url] = response;
  }

  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }

  invalidateUrl(url: string): void {
    this.requests[url] = undefined;
  }

  invalidateCache(): void {
    this.requests = {};
  }
}
