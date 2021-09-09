import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITodo } from '../shared/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss'],
})
export class SingleTodoComponent implements OnInit {
  currentTodo: ITodo | null = null;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {}

  ngOnInit(): void {
    const todoId = this.route.snapshot.paramMap.get('todoId');

    if (todoId) {
      this.todoService.findById(todoId).subscribe((response) => {
        this.currentTodo = response;
      });
    }
  }
}
