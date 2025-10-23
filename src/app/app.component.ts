import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { Title } from '@angular/platform-browser';
import { TodoService } from './services/todo.service';
import { TodoAddFormComponent } from './components/todo-add-form/todo-add-form.component';
import { NgClass } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { NgbCollapseModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from './model/todo.type';

@Component({
  selector: 'app-root',
  imports: [
    TodoItemComponent,
    TodoAddFormComponent,
    NgClass,
    NgbCollapseModule,
    NgbTooltip,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'angular-simple-todo';
  todoService = inject(TodoService);
  tasks = this.todoService.tasks;
  isCollapsed = this.todoService.isCollapsed;
  filterInput = signal('');

  constructor(private titleService: Title) {
    effect(() => {
      this.titleService.setTitle(this.title);
    });
  }

  onInputSearch(event: Event) {
    this.filterInput.set(
      (event.target as HTMLInputElement).value.toLowerCase()
    );
  }
  isInFilter(task: Todo) {
    if (this.filterInput().length < 3) return true;
    return (
      task.name.toLowerCase().includes(this.filterInput()) ||
      task.description?.toLowerCase().includes(this.filterInput()) ||
      task.date.toLowerCase().includes(this.filterInput()) ||
      task.status.toLowerCase().includes(this.filterInput())
    );
  }
}
