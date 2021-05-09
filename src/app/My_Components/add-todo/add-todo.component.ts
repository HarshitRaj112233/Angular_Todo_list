import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  constructor() {}
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {}
  onSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.addTodo.emit(todo);
  }
}
