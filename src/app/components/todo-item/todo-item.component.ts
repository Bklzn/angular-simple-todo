import { Component, input } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { TodoEditItemComponent } from '../todo-edit-item/todo-edit-item.component';
import { TodoDeleteItemComponent } from '../todo-delete-item/todo-delete-item.component';
import { NgClass } from '@angular/common';

@Component({
  selector: '[app-todo-item]',
  imports: [TodoEditItemComponent, TodoDeleteItemComponent, NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  task = input.required<Todo>();
  index = input.required<number>();

  toggleStatus(task: any) {
    if (task.status === 'Completed') {
      task.status = 'Planned';
    } else if (task.status === 'Planned') {
      task.status = 'Pending';
    } else {
      task.status = 'Completed';
    }
  }
}
