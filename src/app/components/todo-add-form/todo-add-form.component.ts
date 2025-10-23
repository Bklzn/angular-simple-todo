import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Modal } from 'bootstrap';
import { DatePipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo.type';

@Component({
  selector: 'app-todo-add-form',
  imports: [ReactiveFormsModule, NgClass, DatePipe],
  templateUrl: './todo-add-form.component.html',
  styleUrl: './todo-add-form.component.scss',
})
export class TodoAddFormComponent {
  todoService = inject(TodoService);
  minDate = new Date();
  todoForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    date: new FormControl<string>('', [
      Validators.required,
      this.todoService.noPastDateValidator,
    ]),
    description: new FormControl<string>('', [Validators.maxLength(300)]),
  });

  openModal() {
    const modalInstance = new Modal('#addTodoForm');
    modalInstance.show();
  }

  closeModal() {
    const modalInstance = Modal.getInstance('#addTodoForm')!;
    modalInstance.hide();
  }

  submitAddForm() {
    if (this.todoForm.invalid) {
      this.todoForm.markAllAsTouched();
      return;
    }
    let newTask: Todo = {
      name: this.todoForm.value.name!,
      date: this.todoForm.value.date!,
      description: this.todoForm.value.description!,
      status: 'Planned',
    };
    this.todoService.addTask(newTask);
    this.closeModal();

    this.todoForm.reset();
  }
}
