import { Injectable } from '@angular/core';
import { IPost } from './common.data';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  constructor() {}
  private baseUrl: string = 'https://jsonplaceholder.typicode.com';

  async getPosts(): Promise<IPost[]> {
    try {
      const response = await fetch(`${this.baseUrl}/posts?_start=0&_end=20`);
      const result: IPost[] = await response.json();
      return result;
    } catch (error: unknown) {
      return [];
    }
  }
}
