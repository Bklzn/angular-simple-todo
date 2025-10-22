import { Component, effect } from '@angular/core';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { Todo } from './model/todo.type';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'angular-simple-todo';

  protected tasks: Todo[] = [
    {
      name: 'Zrobić zakupy spożywcze',
      status: 'Completed',
      date: '2025-05-01',
      description: 'Muszę kupić mleko, mąkę i jajka.',
    },
    {
      name: 'Opłacić rachunki',
      status: 'Pending',
      date: '2025-05-10',
      description: 'Tylko nie odkładaj tego na inny dzień!',
    },
    {
      name: 'Urodziny mamy',
      status: 'Planned',
      date: '2025-05-15',
      description: 'Kupić kwiaty i tort.',
    },
  ];

  constructor(private titleService: Title) {
    effect(() => {
      this.titleService.setTitle(this.title);
    });
  }

  toggleModal() {
    alert('Modal');
  }
}
