import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { API_URL } from 'src/config';
import { IPost } from './common.data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  constructor(private http: HttpClient) {}

  async getPosts(): Promise<IPost[]> {
    try {
      const response = await fetch(`${API_URL}/posts?_start=0&_end=20`);
      const result: IPost[] = await response.json();
      return result;
    } catch (error: unknown) {
      return [];
    }
  }

  getPostsObservable(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${API_URL}/posts?_start=0&_end=20`);
  }

  fakePost(): Observable<IPost> {
    return this.http.post<IPost>(`${API_URL}/posts`, {});
  }
}
