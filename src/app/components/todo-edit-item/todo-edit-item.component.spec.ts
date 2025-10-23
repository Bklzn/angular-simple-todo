import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditItemComponent } from './todo-edit-item.component';

describe('TodoEditItemComponent', () => {
  let component: TodoEditItemComponent;
  let fixture: ComponentFixture<TodoEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoEditItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
