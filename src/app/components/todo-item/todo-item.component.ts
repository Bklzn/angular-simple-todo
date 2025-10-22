import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { Todo } from '../../model/todo.type';

@Component({
  selector: 'app-todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  task = input.required<Todo>();
  descVisible: boolean = false;

  toggleDescription() {
    this.descVisible = !this.descVisible;
  }

  toggleCompleted(task: any) {
    task.status = task.status === 'Completed' ? 'Planned' : 'Completed';
  }
}
