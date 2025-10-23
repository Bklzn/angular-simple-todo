import { Component, inject, input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-todo-delete-item',
  imports: [],
  templateUrl: './todo-delete-item.component.html',
  styleUrl: './todo-delete-item.component.scss',
})
export class TodoDeleteItemComponent {
  index = input.required<number>();
  todoService = inject(TodoService);

  openModal() {
    const modalInstance = new Modal('#deleteTodoForm' + this.index());
    modalInstance.show();
  }

  closeModal() {
    const modalInstance = Modal.getInstance('#deleteTodoForm' + this.index())!;
    modalInstance.hide();
  }

  deleteTask() {
    this.todoService.deleteTask(this.index());
    this.closeModal();
  }
}
