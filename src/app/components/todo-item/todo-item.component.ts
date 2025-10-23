import { Component, input } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { TodoEditItemComponent } from '../todo-edit-item/todo-edit-item.component';
import { TodoDeleteItemComponent } from '../todo-delete-item/todo-delete-item.component';

@Component({
  selector: '[app-todo-item]',
  imports: [TodoEditItemComponent, TodoDeleteItemComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  task = input.required<Todo>();
  index = input.required<number>();

  toggleCompleted(task: any) {
    task.status = task.status === 'Completed' ? 'Planned' : 'Completed';
  }
}
