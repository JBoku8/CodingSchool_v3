import { Injectable } from '@angular/core';
import { API_URL } from 'src/config';
import { IPost } from './common.data';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  constructor() {}

  async getPosts(): Promise<IPost[]> {
    try {
      const response = await fetch(`${API_URL}/posts?_start=0&_end=20`);
      const result: IPost[] = await response.json();
      return result;
    } catch (error: unknown) {
      return [];
    }
  }
}
