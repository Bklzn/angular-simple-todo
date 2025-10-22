import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { Title } from '@angular/platform-browser';
import { TodoService } from './services/todo.service';
import { TodoAddFormComponent } from './components/todo-add-form/todo-add-form.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TodoItemComponent, TodoAddFormComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'angular-simple-todo';
  todoService = inject(TodoService);
  tasks = this.todoService.tasks();

  constructor(private titleService: Title) {
    effect(() => {
      this.titleService.setTitle(this.title);
    });
  }
}
