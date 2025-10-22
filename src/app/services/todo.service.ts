import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks = signal<Todo[]>([
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
  ]);

  constructor() {}

  toggleCompleted(task: Todo) {
    task.status = task.status === 'Completed' ? 'Planned' : 'Completed';
  }
}
