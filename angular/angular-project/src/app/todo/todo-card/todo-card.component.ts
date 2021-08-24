import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../shared/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  @Input() todo: ITodo | null = null;
  @Output() onChange = new EventEmitter<ITodo>();

  constructor() {}

  ngOnInit(): void {}

  onClick(todo: ITodo) {
    if (!todo.completed) {
      this.onChange.emit(todo);
    }
  }
}
