import { Component, effect, inject } from '@angular/core';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { Todo } from './model/todo.type';
import { Title } from '@angular/platform-browser';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  imports: [TodoItemComponent],
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
  toggleModal() {
    alert('Modal');
  }
}
