import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.type';
import { FormControl, ValidationErrors } from '@angular/forms';

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
      name: 'Posprzątać',
      status: 'Pending',
      date: '2025-05-10',
      description: null,
    },
    {
      name: 'Urodziny mamy',
      status: 'Planned',
      date: '2025-05-15',
      description: 'Kupić kwiaty i tort.',
    },
  ]);

  isCollapsed = signal<boolean[]>(this.tasks().map(() => true));

  addTask(task: Todo) {
    this.tasks.update((tasks) => tasks.concat(task));
    this.isCollapsed.update((isCollapsed) => [...isCollapsed, true]);
  }
  editTask(task: Todo, index: number) {
    this.tasks.update((tasks) => [
      ...tasks.slice(0, index),
      task,
      ...tasks.slice(index + 1),
    ]);
    this.isCollapsed.update((isCollapsed) => [
      ...isCollapsed.slice(0, index),
      isCollapsed[index],
      ...isCollapsed.slice(index + 1),
    ]);
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((_, i) => i !== index));
    this.isCollapsed.update((isCollapsed) =>
      isCollapsed.filter((_, i) => i !== index)
    );
  }

  noPastDateValidator(control: FormControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const date = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      return { pastDate: true };
    }
    return null;
  }

  constructor() {}

  toggleCompleted(task: Todo) {
    task.status = task.status === 'Completed' ? 'Planned' : 'Completed';
  }
}
