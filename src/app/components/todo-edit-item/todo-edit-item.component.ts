import { Component, inject, input, OnInit } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { TodoService } from '../../services/todo.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Modal } from 'bootstrap';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-edit-item',
  imports: [NgClass, DatePipe, ReactiveFormsModule],
  templateUrl: './todo-edit-item.component.html',
  styleUrl: './todo-edit-item.component.scss',
})
export class TodoEditItemComponent implements OnInit {
  index = input.required<number>();
  todoService = inject(TodoService);
  task!: Todo;
  minDate = new Date();

  todoForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    date: new FormControl<string>('', [
      Validators.required,
      this.todoService.noPastDateValidator,
    ]),
    status: new FormControl<string>('Pending'),
    description: new FormControl<string>('', [Validators.maxLength(300)]),
  });

  ngOnInit(): void {
    this.task = this.todoService.tasks()[this.index()];
    this.todoForm.patchValue(this.task);
  }

  openModal() {
    const modalInstance = new Modal('#editTodoForm' + this.index());
    modalInstance.show();
  }

  closeModal() {
    const modalInstance = Modal.getInstance('#editTodoForm' + this.index())!;
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
    this.todoService.editTask(newTask, this.index());
    this.closeModal();
  }
}
