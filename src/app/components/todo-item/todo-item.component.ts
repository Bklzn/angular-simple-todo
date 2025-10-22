import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  input,
  Output,
  signal,
  ViewChild,
} from '@angular/core';
import { Todo } from '../../model/todo.type';
import { Collapse } from 'bootstrap';

@Component({
  selector: '[app-todo-item]',
  imports: [],
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
