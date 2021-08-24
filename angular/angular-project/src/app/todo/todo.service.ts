import { Injectable } from '@angular/core';
import { API_URL } from 'src/config';
import { ITodo, FindAllArgs } from './shared/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  //
  async findAll(param: FindAllArgs = { start: 0, end: 10 }): Promise<ITodo[]> {
    try {
      const response = await fetch(
        `${API_URL}/todos?_start=${param.start}&_end=${param.end}`
      );
      const result: ITodo[] = await response.json();
      return result;
    } catch (e: any) {
      return [];
    }
  }
}
