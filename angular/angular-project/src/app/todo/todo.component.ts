import { Component, OnInit } from '@angular/core';
import { ITodo } from './shared/todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoList: ITodo[] = [];
  oldList: ITodo[] = [];
  private _searchTerm: string = '';

  get searchTerm() {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.onSearch();
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.oldList = await this.todoService.findAll();
    this.todoList = [...this.oldList];
  }

  onSearch() {
    if (this.searchTerm.length) {
      this.todoList = this.oldList.filter((t) =>
        t.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.loadData();
    }
  }

  onRadioButtonClick(filter: 'completed' | 'isNotCompleted' | 'all') {
    if (filter === 'completed') {
      this.todoList = this.oldList.filter((t) => t.completed);
    } else if (filter === 'isNotCompleted') {
      this.todoList = this.oldList.filter((t) => !t.completed);
    } else {
      this.loadData();
    }
  }

  onSubmit() {}

  onTodoChange(todo: ITodo) {
    this.todoList = this.oldList.map((t) => {
      if (t.id === todo.id) {
        t.completed = true;
      }

      return t;
    });
  }
}
