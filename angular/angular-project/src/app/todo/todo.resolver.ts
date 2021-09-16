import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ITodo } from './shared/todo';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoResolver implements Resolve<ITodo[]> {
  constructor(private todoService: TodoService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ITodo[]> {
    return this.todoService.getAll({ end: 200 });
  }
}
