import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FindAllArgs, ITodo, TodoStatus } from './shared/todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoList: ITodo[] = [];
  oldList: ITodo[] = [];
  private _statusFilter: TodoStatus = 'all';
  private _searchTerm: string = '';
  private _rangeEnd: number = 10;

  get searchTerm() {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.onSearch();
  }

  constructor(private todoService: TodoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(params: FindAllArgs = { start: 0, end: 150 }) {
    // this.oldList = await this.todoService.findAll(params);
    this.oldList = this.route.snapshot.data['resolvedTodoList'];
    this.todoList = [...this.oldList];

    this.filterData();
  }

  onSearch() {
    if (this.searchTerm.length) {
      this.todoList = this.oldList.filter((t) =>
        t.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.loadData({
        start: 0,
        end: this._rangeEnd,
      });
    }
  }

  onRadioButtonClick(filter: TodoStatus) {
    this._statusFilter = filter;
    this.filterData();
  }

  onRangeChange(event: any) {
    this._rangeEnd = event.target.value ? +event.target.value : 10;

    const loadDataParams: FindAllArgs = {
      start: 0,
      end: this._rangeEnd,
    };

    this.loadData(loadDataParams);
  }

  filterData() {
    if (this._statusFilter === 'completed') {
      this.todoList = this.oldList.filter((t) => t.completed);
    } else if (this._statusFilter === 'isNotCompleted') {
      this.todoList = this.oldList.filter((t) => !t.completed);
    } else {
      this.todoList = [...this.oldList];
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
