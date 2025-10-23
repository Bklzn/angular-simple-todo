import { Component, input } from '@angular/core';
import { Todo } from '../../model/todo.type';

@Component({
  selector: '[app-todo-item]',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  task = input.required<Todo>();
  index = input.required<number>();
  isCollapsed = input.required<boolean>();

  toggleCompleted(task: any) {
    task.status = task.status === 'Completed' ? 'Planned' : 'Completed';
  }
}
