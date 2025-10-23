import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeleteItemComponent } from './todo-delete-item.component';

describe('TodoDeleteItemComponent', () => {
  let component: TodoDeleteItemComponent;
  let fixture: ComponentFixture<TodoDeleteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDeleteItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDeleteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
